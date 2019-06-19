import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

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
        }
    }

    componentDidMount() {
        this.routeWithSubRoutes();
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

        const { adminRoutes } = this.state;

        return (
            <div className="d-flex" id="wrapper">

                <Sidebar />

                <div id="page-content-wrapper">

                    <Header />

                    <div className="container-fluid content">
                        <Switch>
                            { adminRoutes }
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

const enhance = compose (
    withRouter,
    connect (mapStateToProps, mapDispatchToProps)
);

export default enhance(Admin);

Admin.propTypes = {
    routes: PropTypes.array.isRequired,
    accounts: PropTypes.object.isRequired,
    getPersonalAccount: PropTypes.func.isRequired
};