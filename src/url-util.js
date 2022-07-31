const urlBuilder = (server = {}, uri = "", params = {}) => {
  let url;
  if (server.protocol) {
    url = server.protocol + "://";
  } else {
    url = "http://";
  }
  if (server.host) {
    url = url + server.host;
  } else {
    url = url + "localhost";
  }
  if (server.port) {
    url = url + ":" + server.port;
  }
  if (server.contextPath) {
    url = url + server.contextPath;
  } else {
    url = url + "/";
  }
  let queryStr = "";
  let localUri = uri;
  for (const [key, value] of Object.entries(params)) {
    if (uri.includes("{" + key + "}")) {
      localUri = localUri.replace("{" + key + "}", encodeURIComponent(value));
    } else {
      if (queryStr === "") {
        queryStr = "?" + key + "=" + encodeURIComponent(value);
      } else {
        queryStr = queryStr + "&" + key + "=" + encodeURIComponent(value);
      }
    }
  }
  url = url + localUri + queryStr;
  return url;
};

const setServer = (server, {protocol, host, port, contextPath}) => {
  if (protocol) {
    server.protocol = protocol;
  }
  if (host) {
    server.host = host;
  }
  if (port) {
    server.port = port;
  }
  if (contextPath) {
    server.contextPath = contextPath;
  }
};

module.exports = {
	urlBuilder: urlBuilder,
	setServer: setServer
};