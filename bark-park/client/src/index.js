import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import Login from './components/Login';
import Welcome from './components/Welcome';

const store = createStore(rootReducer, applyMiddleware(thunk))




ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/app" component={App}></Route>
                <Route exact path="/" component={Welcome}></Route>
            </div>
        </Router>
    </Provider>
    ), document.getElementById('root'));


registerServiceWorker();

