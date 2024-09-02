// A BrowserWindow's preload script runs in a context that has access to
// both the HTML DOM and a limited subset of Node.js and Electron APIs.

import { MyApi } from "./MyApi.js"

new MyApi().expose();
