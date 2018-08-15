import React from 'react';
import Reactdom from 'react-dom';
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './index.css';

const store = createStore(
    rootReducer    
);

Reactdom.render(
    <Provider store={store} >
        <Router>
            <Routes />
        </Router>
    </Provider>, 
    document.getElementById('root')
);