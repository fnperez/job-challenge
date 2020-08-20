export default class ApiHeaders {
	constructor() {
		this.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
			'Accept-Language': 'en'
		};

		this.customKeys = {
			'content-type': 'Content-Type',
			accept: 'Accept',
			'x-requested-with': 'X-Requested-With',
			'accept-language': 'Accept-Language',
			authorization: 'Authorization'
		};
	}

	__normalizedName(name) {
		const lowerCase = name.toLowerCase();

		if (this.customKeys[lowerCase]) {
			return this.customKeys[lowerCase];
		}

		this.customKeys[lowerCase] = name;
		return name;
	}

	get accept() { return this.headers.Accept; }
	set accept(value) { this.headers.Accept = value; }

	get authorization() { return this.headers.Authorization; }
	set authorization(value) { this.headers.Authorization = value; }

	get contentType() { return this.headers['Content-Type']; }
	set contentType(value) { this.headers['Content-Type'] = value; }

	get language() { return this.headers['Accept-Language']; }
	set language(value) { this.headers['Accept-Language'] = value; }

	get(name) {
		return this.headers[this.__normalizedName(name)];
	}

	set(name, value) {
		this.headers[this.__normalizedName(name)] = value;
	}

	toDictionary() {
		return this.headers;
	}
}