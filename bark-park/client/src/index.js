import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
// import Login from './components/Login';
// import SignupForm from './components/SignupForm'
// import Welcome from './components/Welcome';

import AppRouter from './components/appRouter'
const store = createStore(rootReducer, applyMiddleware(thunk))




ReactDOM.render((
    <Provider store={store}>
        <AppRouter />
    </Provider>
    ), document.getElementById('root'));


registerServiceWorker();

