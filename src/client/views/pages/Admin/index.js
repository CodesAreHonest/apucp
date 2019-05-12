import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminRoutes: ''
        }

    }

    componentDidMount() {
        this.routeWithSubRoutes()
    }

    routeWithSubRoutes() {

        const {routes} = this.props;

        let adminRoutes = routes.map((route, index) => {

            return (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                />
            )
        });

        this.setState({adminRoutes});
    };


    render() {

        const { adminRoutes } = this.state;

        return (
            <div>
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <Link to="/admin/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/admin/cart">Cart</Link>
                    </li>
                </ul>

                { adminRoutes }

            </div>

        )
    }
}

export default Admin;

Admin.propTypes = {
    routes: PropTypes.array.isRequired
};