import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {BrowserRouter} from 'react-router-dom';
import siteInfoReducer from './store/reducers/siteInfo';
import thunkMiddleware from 'redux-thunk';
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    siteInfo: siteInfoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, enhancers);

// axios.defaults.baseURL = 'http://104.236.67.73:3456/api/all/';


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
