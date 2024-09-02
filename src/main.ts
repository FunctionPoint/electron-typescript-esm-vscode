// This Main process runs in Node.js.
// It does not have direct access to the browser context.
// IPC is used to bridge these contexts.

import { MyApp } from "./MyApp.js";

new MyApp().start();
