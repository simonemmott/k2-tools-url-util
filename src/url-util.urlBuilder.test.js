let urlBuilder = require("./url-util.js").urlBuilder;

describe("url-util.urlBuilder", () => {
	test("It should build the default URL 'http://localhost/'", () => {
		const url = urlBuilder();
		expect(url.toString()).toEqual("http://localhost/");
	});
	
	test("It should build the URL from service and URI", () => {
		const server = {
			protocol: "https",
			host: "somehost.com",
			port: "8080",
			contextPath: "/CONTEXT/"
		}
		const uri = "URI";
		const url = urlBuilder(server, uri);
		expect(url.toString()).toEqual("https://somehost.com:8080/CONTEXT/URI");
	});

	test("It should populate path parameters", () => {
		const server = {
			protocol: "https",
			host: "somehost.com",
			port: "8080",
			contextPath: "/CONTEXT/"
		}
		const uri = "URI/{key}";
		const params = {key: "KEY"};
		const url = urlBuilder(server, uri, params);
		expect(url.toString()).toEqual("https://somehost.com:8080/CONTEXT/URI/KEY");
	});

	test("It should populate query parameters", () => {
		const server = {
			protocol: "https",
			host: "somehost.com",
			port: "8080",
			contextPath: "/CONTEXT/"
		}
		const uri = "URI";
		const params = {key: "KEY", query: "QUERY"};
		const url = urlBuilder(server, uri, params);
		expect(url.toString()).toEqual("https://somehost.com:8080/CONTEXT/URI?key=KEY&query=QUERY");
	});

	test("It should URI encode parameters", () => {
		const server = {
			protocol: "https",
			host: "somehost.com",
			port: "8080",
			contextPath: "/CONTEXT/"
		}
		const uri = "URI/{key}";
		const params = {key: "!@£", query: "!@£"};
		const url = urlBuilder(server, uri, params);
		expect(url.toString()).toEqual("https://somehost.com:8080/CONTEXT/URI/!%40%C2%A3?query=!%40%C2%A3");
	});

});