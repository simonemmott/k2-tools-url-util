let urlBuilder = require("./url-util.js").urlBuilder;

describe("url-util.urlBuilder", () => {
	test("It should build the default URL 'http://localhost/'", () => {
		const url = urlBuilder();
		expect(url.toString()).toEqual("http://localhost/");
	})
});