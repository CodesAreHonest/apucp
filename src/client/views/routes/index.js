import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import AdminRoutes from './admin/routeWithSubRoutes';
import AuthenticationRoutes from './authentication/routes';
import ConfessorRoutes from './confessor/routes';

class Routes extends Component {
    constructor (props) {
        super (props);

        this.state = {
            reactRoutes: '',
            adminRoutes: AdminRoutes()
        }
    }

    componentDidMount() {
        this.renderStaticRoutes();
    }

    renderStaticRoutes() {
        let rootRoutes = Array.prototype.concat(
            AuthenticationRoutes,
            ConfessorRoutes
        );

        let reactRoutes = rootRoutes.map((route, index) => (
            <Route
                exact={route.exact}
                key={index}
                path={route.path}
                component={route.component}
            />
        ));

        this.setState({reactRoutes});
    }

    render() {

        const { reactRoutes, adminRoutes } = this.state;

        return (
            <Fragment>
                { reactRoutes }
                { adminRoutes }
            </Fragment>
        )
    }
}


export default Routes;