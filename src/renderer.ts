// This Renderer process runs in the browser.
// It does not have direct access to the Node.js Main context.
// IPC is used to bridge these contexts.

import { MyView } from "./MyView.js";

new MyView().start();

