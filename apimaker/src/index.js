import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from "redux-thunk"
import { apiReducer } from "./Reducer/ApiReducer"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

let store = createStore(apiReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root'));

