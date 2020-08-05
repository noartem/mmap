import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as ReakitProvider } from "reakit";
import * as system from "reakit-system-bootstrap";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ReakitProvider unstable_system={system}>
        <App />
      </ReakitProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
