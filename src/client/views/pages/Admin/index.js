import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sidebar from "../../components/Common/Sidebar";
import Header from "../../components/Common/Header";

import "./index.css";


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
            <div className="d-flex" id="wrapper">

                <Sidebar />

                <div id="page-content-wrapper">

                    <Header />

                    <div className="container-fluid content">
                        <Switch>
                            { adminRoutes }
                            <Redirect from="/admin" exact to="/admin/dashboard" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;

Admin.propTypes = {
    routes: PropTypes.array.isRequired
};