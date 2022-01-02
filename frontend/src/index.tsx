import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store"
import { Provider } from 'react-redux'
import "./style/main.sass"
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
