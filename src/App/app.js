import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import components from 'components';
import pages from './pages';
import {default as Reducers} from './reducers';

//TODO: Need to fix the admin reducers
const store = createStore(
  Reducers
);

ReactDOM.render(
    <Provider store={store}>
        <pages.Home/>
    </Provider>,
    document.getElementById('container')
);