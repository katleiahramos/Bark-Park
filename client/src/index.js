import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppRouter from './components/appRouter';

// import App from './App';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Login from './components/Login';
// import SignupForm from './components/SignupForm'
// import Welcome from './components/Welcome';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render((
    <Provider store={store}>
        <AppRouter />
    </Provider>
    ), document.getElementById('root'));


registerServiceWorker();

