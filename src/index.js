import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "../src/component/App"
import { unregister } from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/root_store";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
     
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
unregister();