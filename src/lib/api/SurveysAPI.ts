import api from './api';
import errors from './errors';

const countActive = async () => {
	try {
		const res = await api.get(`/surveys/count/active`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const countResults = async () => {
	try {
		const res = await api.get(`/surveys/count/results`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const listActive = async (limit: number, offset: number) => {
	try {
		const res = await api.get(`/surveys/list/active?limit=${limit}&offset=${offset}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const listResults = async (limit: number, offset: number) => {
	try {
		const res = await api.get(`/surveys/list/results?limit=${limit}&offset=${offset}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const info = async (SurveyID: number) => {
	try {
		const res = await api.get(`/surveys/info/${SurveyID}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const infoForVoting = async (SurveyID: number) => {
	try {
		const res = await api.get(`/surveys/info/${SurveyID}?withChoices=true`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const voterDetails = async (ChoiceID: number) => {
	try {
		const res = await api.get(`/surveys/voter-details/${ChoiceID}`);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export default {
	countActive,
	countResults,
	listActive,
	listResults,
	info,
	infoForVoting,
	voterDetails
};
