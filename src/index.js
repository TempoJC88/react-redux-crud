import React from 'react';
import Reactdom from 'react-dom';
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import PetsService from './api/PetsService'

const defaultState = {
    pets: PetsService.pets
}
const store = configureStore(defaultState);

Reactdom.render(
    <Provider store={store} >
        <Router>
            <Routes />
        </Router>
    </Provider>, document.getElementById('root'));