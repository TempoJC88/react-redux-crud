import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Layout from './components/views/Layout';
import Home from './components/views/Layout/Home';
import GetList from './components/containers/Pets/GetList'
import Create from './components/containers/Pets/Create'
import Detail from './components/containers/Pets/Detail'

const withLayout = (view, title = '') => <Layout title={title}>{view}</Layout>;

const Routes = () => {
    return (
        <App>            
            <Switch>                
                <Route
                    exact
                    path="/"
                    render={props => withLayout(<Home />, 'HOME')}
                />
                <Route
                    exact
                    path="/listPets"
                    render={props => withLayout(<GetList {...props} />, 'LISTADO ANIMALES')}
                />
                <Route
                    exact
                    path="/createPet"
                    render={props => withLayout(<Create {...props} />, 'CREAR ANIMAL')}
                />
                <Route
                    exact                    
                    path="/detailPet/:id"
                    render={props => withLayout(<Detail {...props} />, 'DETALLE ANIMAL')}
                />
            </Switch>
        </App>
    )
}

export default Routes;