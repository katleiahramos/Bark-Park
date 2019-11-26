import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { RestfulProvider } from "restful-react";
import AppRouter from "./components/appRouter";

// require("dotenv").config();

// import App from './App';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './components/Login';
// import SignupForm from './components/SignupForm'
// import Welcome from './components/Welcome';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <RestfulProvider base="/api">
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </RestfulProvider>,
  document.getElementById("root")
);

registerServiceWorker();
