import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import GetListPets from './components/containers/Pets/GetListPets'

const Routes = () => {

    return (
        <App>
            <Switch>
                <Route path="/pets" component={GetListPets} />
            </Switch>
        </App>
    )

}

export default Routes;