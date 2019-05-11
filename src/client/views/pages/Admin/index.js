import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// const RouteWithSubRoutes  = (route) => {
//     return (
//         <Route
//             path={route.path}
//             render={props => (
//                 // pass the sub-routes down to keep nesting
//                 <route.component {...props} routes={route.routes} />
//             )}
//         />
//     );
// };

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is Admin Dashboard
            </div>

        )
    }
}

export default Admin;