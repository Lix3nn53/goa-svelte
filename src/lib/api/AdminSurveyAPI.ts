import api from './api';
import errors from './errors';

const getConfirmed = async (SurveyID: number) => {
	try {
		const res = await api.get(`/admin/survey/confirm/${SurveyID}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const confirm = async (SurveyID: number, Status: "waiting" | "declined" | "confirmed") => {
	try {
		const res = await api.post(`/admin/survey/confirm`, { SurveyID, Status });

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export default {
	confirm,
	getConfirmed
};
