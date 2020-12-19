import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "App"
import { unregister } from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

// //import fonts

import 'assets/fonts/BarlowCondensed-Regular.ttf'
import 'assets/fonts/BarlowCondensed-Medium.ttf'
import 'assets/fonts/BarlowCondensed-SemiBold.ttf'
import 'assets/fonts/BarlowCondensed-Bold.ttf'
import 'assets/fonts/RobotoSlab-Regular.ttf'
import 'assets/fonts/Rosario-Bold.ttf'
import 'assets/fonts/Roboto-Regular.ttf'
import 'assets/fonts/Roboto-Medium.ttf'
import 'assets/fonts/Barlow-SemiBold.ttf'
import 'assets/fonts/BarlowSemiCondensed-BoldItalic.ttf'
import 'assets/fonts/Sarabun-Regular.ttf'
import 'assets/fonts/BarlowSemiCondensed-Medium.ttf'

import 'style.css'

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