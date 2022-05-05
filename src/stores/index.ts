import { writable } from 'svelte/store';
import UsersAPI from '$lib/api/UsersAPI';
import errors from '$lib/api/errors';

function createUser() {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		fetchUser: async (): Promise<boolean> => {
			const response = await UsersAPI.userInfo();

			if (errors.isError(response)) {
				set(false)
				return false;
			}

			set(response)
			return true;
		}
	};
}

export const user = createUser();
