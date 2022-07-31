# K2 Tools - URL Builder

## Import
```javascript
// Import the URL Utilities package in a module
import {urlBuilder} from "@k2_tools/url-util";

// OR in a script
var urlBuilder = require("@k2_tools/url-util").urlBuilder;
```


## Usage
```javascript
// Create a URL setting path and query parameters
const service = {
  host: "localhost",
  port: 8080,
  contextPath: "/api"
};

const uri = "widget/{key}";

const params {
  key: "KEY",
  query: "string"
};

const url = urlBuilder(service, uri, params);

console.log(url);
```

Outputs

```
http://localhost:8080/api/widget/KEY?query=string
```

## Parameters

### Service

The service parameter accepts and object with the following properties and describes the network location of a REST service

| Property | Description | Default |
| --- | --- | --- |
| `protocol` | The network protocol to access the service | `http:` |
| `host` | The network host offering the service | `localhost` |
| `port` | The network port to access the service | `80` |
| `contextPath` | The context path of the service on the host | `\` |

Defaults to `{}`

### URI

The URI parameter is a string representing the endpoint of the resource offered by the service.

It may include path paramters in braces `{...}`. Path parameters are automatically substituted with the given parameter value for the matching key.

Defaults to `""`


### Params

The params parameter defined the parameter values to include in the resultant URL as URI encoded values

If the name of a parameter matches a path parameter `{...}` then the path parameter is replaced by the URI encoded parameter value

If the name of a parameter does not match a path parameter then the parameter is appended to the URL as a query parameter with its URI encoded value.