import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import postsReducer from "./store/reducers/posts";
import  thunk  from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    posts: postsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
