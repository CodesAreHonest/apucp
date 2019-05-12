import {Route} from "react-router-dom";
import routes from './routes';
import React from "react";

const routeWithSubRoutes = () => {

    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    ));
};

export default routeWithSubRoutes;