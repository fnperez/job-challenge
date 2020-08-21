import AbstractApi from './abstract-api';
import { waitDelay } from '@lib/timer-utils';
import config from '@config';
import Axios from 'axios';

export default class Api extends AbstractApi {
	constructor() {
		super(Axios);

		this.__authenticationToken = undefined;
		this.__apiUrl = undefined;
	}

	static __isExtraordinaryError(error) {
		return error.constructor && error.constructor.name !== 'ApiResponse';
	}

	static movies() {
		const api = new Api();

		api.authenticationToken = config.MOVIE_API_TOKEN;
		api.apiUrl = config.MOVIE_API_URL;

		return api;
	}

	get authenticationToken() { return this.__authenticationToken; }
	set authenticationToken(value) {
		this.__authenticationToken = value;

		this.authorization = this.__authenticationToken
			? `Bearer ${this.__authenticationToken}`
			: undefined;
	}

	get apiUrl() { return this.__apiUrl }
	set apiUrl(value) { this.__apiUrl = value }

	__request(
		method,
		url,
		body = undefined,
		headers = {},
		retryCount = 0
	) {
		const endpoint = this.apiUrl ? this.apiUrl + url : url;

		return super.__request(method, endpoint, body, headers)
			.catch((err) => {
				if (Api.__isExtraordinaryError(err) && retryCount < 3) {
					return waitDelay(1000 * (2 ** retryCount))
						.then(
							() => this.__request(method, url, body, headers, retryCount + 1)
						);
				}

				throw err;
			});
		}
}