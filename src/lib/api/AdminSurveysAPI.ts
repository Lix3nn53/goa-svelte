import api from './api';
import errors from './errors';

const countWaitingConfirmation = async () => {
	try {
		const res = await api.get(`/admin/surveys/count/waiting`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const listWaitingConfirmation = async (limit: number, offset: number) => {
	try {
		const res = await api.get(`/admin/surveys/list/waiting?limit=${limit}&offset=${offset}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export default {
	countWaitingConfirmation,
	listWaitingConfirmation
};
