import ApiHeaders from './api-headers';
import ApiResponse from './api-response';

export default class AbstractApi {
	constructor(fetchBackend = fetch) {
		this.fetch = fetchBackend;
		this.headers = new ApiHeaders();
	}

	__options(method, body = undefined, requestHeaders = {}) {
		const headers = {
			...this.headers.toDictionary(),
			...requestHeaders
		};

		const options = {
			method,
			headers
		};

		if (body) {
			if (headers['Content-Type'] === 'application/json') {
				options.body = JSON.stringify(body);
			} else {
				options.body = body;
			}
		}

		return options;
	}

	get authorization() { return this.headers.authorization; }
	set authorization(value) { this.headers.authorization = value; }
	
	__request(method, url, body = undefined, headers = {}) {
		return this
			.fetch(url, this.__options(method, body, headers))
			.then(response => ApiResponse.fromFetchResponse(response))
			.then(apiResponse => {
				if (!apiResponse.isOk) { throw apiResponse; }
				return apiResponse;
			});
	}

	get(url, headers = {}) {
		return this.__request('GET', url, undefined, headers);
	}

	post(url, body = undefined, headers = {}) {
		return this.__request('POST', url, body, headers);
	}

	patch(url, body = undefined, headers = {}) {
		return this.__request('PATCH', url, body, headers);
	}

	put(url, body = undefined, headers = {}) {
		return this.__request('PUT', url, body, headers);
	}

	delete(url, body = undefined, headers = {}) {
		return this.__request('DELETE', url, body, headers);
	}
}