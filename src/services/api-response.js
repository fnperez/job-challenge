export default class ApiResponse {
	constructor(response, json) {
		this.response = response;
		this.json = json;
	}

	static fromFetchResponse(response) {
		return new ApiResponse(response, response.data)
	}

	get status() { return this.response.status; }
	get statusText() { return this.response.statusText; }
	get headers() { return this.response.headers; }

	get isOk() { return this.response.status.between(200, 299)  || this.response.status === 304; }
}