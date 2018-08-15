import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Layout from './components/views/Layout';
import GetListPets from './components/containers/Pets/GetListPets'

const withLayout = (view, title = '') => <Layout title={title}>{view}</Layout>;

const Routes = () => {
    return (
        <App>            
            <Switch>                
                <Route
                    exact
                    path="/"
                    render={props => withLayout(<GetListPets {...props} />, 'HOME')}
                />
                <Route
                    exact
                    path="/pets"
                    render={props => withLayout(<GetListPets {...props} />, 'LISTADO ANIMALES')}
                />
            </Switch>
        </App>
    )
}

export default Routes;