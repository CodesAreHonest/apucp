import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';

import AdminRoutesSetup from './admin/routeWithSubRoutes';
import AuthenticationRoutes from './authentication/routes';
import ConfessorRoutes from './confessor/routes';
import NotFound from './NotFound';

class Routes extends Component {
    constructor (props) {
        super (props);

        this.state = {
            reactRoutes: [],
            adminRoutes: AdminRoutesSetup()
        }
    }

    componentDidMount() {
        this.renderStaticRoutes();
    }

    renderStaticRoutes() {

        let rootRoutes = Array.prototype.concat(
            AuthenticationRoutes,
            ConfessorRoutes,
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
                <Switch>
                    { reactRoutes }
                    { adminRoutes }
                    { reactRoutes.length !== 0 &&
                        adminRoutes.length !== 0 &&
                    <Route component={NotFound} /> }
                </Switch>
            </Fragment>
        )
    }
}


export default Routes;