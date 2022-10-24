import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import fortniteReducer from "./fortniteState";
import fortniteSaga from "./fortniteSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { fortnite: fortniteReducer },
  middleware: [saga],
});

saga.run(fortniteSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
