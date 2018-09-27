import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/index';

const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

const homeContainer = document.getElementById('home-container');

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>
    ,homeContainer);

