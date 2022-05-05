import TokenService from './TokenService';
import errors from './errors';

module api {
	const base = 'http://localhost:8080/v1';

	async function send({ method, path, data }) {
		const opts: RequestInit = { method, headers: {} };

		if (data) {
			opts.headers['Content-Type'] = 'application/json';
			opts.body = JSON.stringify(data);
		}

		if (path === '/auth/logout') {
			// only path that uses refresh token
			const token = TokenService.getLocalRefreshToken();
			if (token) {
				opts.headers['Authorization'] = `Bearer ${token}`;
			}
		} else {
			const token = TokenService.getLocalAccessToken();
			if (token) {
				opts.headers['Authorization'] = `Bearer ${token}`;
			}
		}

		try {
			const response = await fetch(`${base}${path}`, opts);

			return response;
		} catch (error) {
			return errors.errorHandler(error);
		}
	}

	async function parseResponseBody(response: Response) {
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.indexOf('application/json') !== -1) {
			return await response.json();
		} else {
			return await response.text();
		}
	}

	async function refreshAccessToken() {
		const token = TokenService.getLocalRefreshToken();

		if (!token) {
			return Promise.reject(new Error('no local refresh token'));
		}

		try {
			const opts: RequestInit = { method: 'GET', headers: { Authorization: `Bearer ${token}` } };
			const response = await fetch(`${base}/auth/refresh_token`, opts);

			const parsed = await parseResponseBody(response);

			const save = TokenService.isSaved();
			TokenService.setLocalAccessToken(parsed.access_token, save);

			return true;
		} catch (_error) {
			return Promise.reject(_error);
		}
	}

	async function sendWithRefresh({ method, path, data }) {
		let response = await send({ method, path, data });

		if (errors.isError(response)) {
			return response;
		}

		if (response.status === 401) {
			const refresh = await refreshAccessToken();

			if (refresh) {
				// try again if refresh
				response = await send({ method, path, data });
			}
		}

		return response;
	}

	async function sendWithRefreshAndParse({ method, path, data }) {
		const response = await sendWithRefresh({ method, path, data });

		if (errors.isError(response)) {
			return response;
		}

		const parsed = await parseResponseBody(response);

		return parsed;
	}

	export function get(path) {
		return sendWithRefreshAndParse({ method: 'GET', path, data: null });
	}

	export function del(path) {
		return sendWithRefreshAndParse({ method: 'DELETE', path, data: null });
	}

	export function post(path, data) {
		return sendWithRefreshAndParse({ method: 'POST', path, data });
	}

	export function put(path, data) {
		return sendWithRefreshAndParse({ method: 'PUT', path, data });
	}
}

export default api;
