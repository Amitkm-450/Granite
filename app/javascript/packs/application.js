// Entry point for the build script in your package.json
import "../stylesheets/application.css";
import ReactRailsUJS from "react_ujs";
import App from "../src/App";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";

registerIntercepts();
initializeLogger();
setAuthHeaders();

const componentsContext = { App };
ReactRailsUJS.getConstructor = name => {
  return componentsContext[name];
};
