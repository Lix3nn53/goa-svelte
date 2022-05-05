import api from './api';
import errors from './errors';

import type { Survey } from '../types';

const createSurvey = async (survey: Survey) => {
	try {
		const res = await api.post('/survey/create', survey);

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const vote = async (SurveyID: number, Votes: number[]) => {
	try {
		const res = await api.post('/survey/vote', { SurveyID, Votes });

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export default {
	createSurvey,
	vote
};
