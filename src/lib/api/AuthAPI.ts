import type moment from 'moment';

import api from './api';
import errors from './errors';
import TokenService from './TokenService';

const logout = async () => {
	try {
		const res = await api.get(`/auth/logout`);
		TokenService.removeLocalAccessToken();
		TokenService.removeLocalRefreshToken();

		return res;
	} catch (error) {
		TokenService.removeLocalAccessToken();
		TokenService.removeLocalRefreshToken();

		return errors.errorHandler(error);
	}
};

const handleAuthResponse = (res: any, save: boolean) => {
	if (res.refresh_token && res.access_token) {
		TokenService.setLocalAccessToken(res.access_token, save);
		TokenService.setLocalRefreshToken(res.refresh_token, save);

		return { error: false };
	}
	return { error: res.error };
};

const login = async (IDNumber: string, password: string, save: boolean) => {
	try {
		const res = await api.post(`/auth/login`, { IDNumber, password });

		return handleAuthResponse(res, save);
	} catch (error) {
		return errors.errorHandler(error);
	}
};

const register = async (
	name: string,
	surname: string,
	IDNumber: string,
	password: string,
	email: string,
	isResident: boolean,
	birthSex: BirthSex,
	genderIdentity: GenderIdentity,
	birthDate: moment.Moment
) => {
	try {
		const res = await api.post(`/auth/register`, {
			name,
			surname,
			IDNumber: IDNumber.toString(),
			password,
			email,
			IsResident: isResident,
			birthSex,
			genderIdentity,
			birthDate
		});
		console.log(res);

		return { error: false };
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export enum BirthSex {
	Woman = 'woman',
	Man = 'man',
	NoRespond = 'norespond' // prefer not to respond
}

const toStringBirthSex = (value: BirthSex): string => {
	switch (value) {
		case BirthSex.Woman:
			return 'Woman';
		case BirthSex.Man:
			return 'Man';
		default:
			// NoRespond
			return 'Prefer not to respond';
	}
};

export const toStringArrayBirthSex = (): string[] => {
	const result: string[] = [];

	const values = Object.values(BirthSex);
	values.forEach((element) => {
		result.push(toStringBirthSex(element));
	});

	return result;
};

export enum GenderIdentity {
	Woman = 'woman',
	Man = 'man',
	Transgender = 'transgender',
	NonBin = 'non', // non-binary/non-conforming
	NoRespond = 'norespond'
}

const toStringGenderIdentity = (value: GenderIdentity): string => {
	switch (value) {
		case GenderIdentity.Woman:
			return 'Woman';
		case GenderIdentity.Man:
			return 'Man';
		case GenderIdentity.Transgender:
			return 'Transgender';
		case GenderIdentity.NonBin:
			return 'Non-binary/Non-conforming';
		default:
			// NoRespond
			return 'Prefer not to respond';
	}
};

export const toStringArrayGenderIdentity = (): string[] => {
	const result: string[] = [];

	const values = Object.values(GenderIdentity);
	values.forEach((element) => {
		result.push(toStringGenderIdentity(element));
	});

	return result;
};

export default {
	logout,
	login,
	register
};
