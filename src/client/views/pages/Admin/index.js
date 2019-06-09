import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sidebar from "../../components/Common/Sidebar";
import Header from "../../components/Common/Header";

import "./index.css";

import { getPersonalAccount } from "../../../state/ducks/facebook/actions";


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminRoutes: '',
            accounts: {},
            authenticated: false,
        }
    }

    componentDidMount() {
        this.routeWithSubRoutes();

        let hash = window.location.hash.substring(1);
        let objects = new URLSearchParams(hash);

        if (objects.has('access_token')) {
            let access_token = objects.get('access_token');
            this.props.getPersonalAccount(access_token);
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.accounts !== this.props.accounts) {

            // verify whether the facebook user possess permission on APU Confession Page
            let pageAccess = this.props.accounts.find (account => account.id === '121412055027319');

            if (!pageAccess) {
                window.location.href = '/auth/admin/login';
            }

            let { tasks } = pageAccess;

            // verify the facebook user possess responsibility to create content
            let requiredTask = tasks.find(account => account === 'CREATE_CONTENT');

            if (!requiredTask) {
                window.location.href = '/auth/admin/login';
            }

            this.setState({authenticated: true});
        }
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
    }


    render() {

        const { adminRoutes,authenticated } = this.state;

        return (
            <div className="d-flex" id="wrapper">

                <Sidebar />

                <div id="page-content-wrapper">

                    <Header />

                    <div className="container-fluid content">
                        <Switch>
                            { adminRoutes }
                            { authenticated &&
                                <Redirect from="/admin" exact to="/admin/dashboard" /> }
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getPersonalAccount
};

const mapStateToProps = ({facebook}) => {

    return {
        accounts: facebook.accounts
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

Admin.propTypes = {
    routes: PropTypes.array.isRequired
};