export default class ApiResponse {
	constructor(response, json) {
		this.response = response;
		this.json = json;
	}

	static fromFetchResponse(response) {
		return response.json()
			.then(
				json => new ApiResponse(response, json)
			)
			.catch(
				() => new ApiResponse(response, undefined)
			);
	}

	get status() { return this.response.status; }
	get statusText() { return this.response.statusText; }
	get headers() { return this.response.headers; }

	get isOk() { return this.response.ok || this.response.status === 304; }
}