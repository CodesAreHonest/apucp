import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import AdminRoutes from './admin/routes';
import AuthenticationRoutes from './authentication/routes';
import ConfessorRoutes from './confessor/routes';

let rootRoutes = Array.prototype.concat(
    AdminRoutes,
    AuthenticationRoutes,
    ConfessorRoutes
);

class Routes extends Component {
    constructor (props) {
        super (props);

        this.state = {
            reactRoutes: ''
        }
    }

    componentDidMount() {
        this.renderRoutes();
    }

    renderRoutes() {
        let reactRoutes = rootRoutes.map((route, index) => (
            <Route
                exact={true}
                key={index}
                path={route.path}
                component={route.component}
            />
        ));

        this.setState({reactRoutes});
    }

    render() {

        const { reactRoutes } = this.state;

        return (
            <Fragment>
                { reactRoutes }
            </Fragment>
        )
    }
}


export default Routes;