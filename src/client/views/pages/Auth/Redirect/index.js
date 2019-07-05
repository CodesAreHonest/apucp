import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { getPersonalAccount } from "../../../../state/ducks/facebook/actions";

class AdminRedirect extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let hash = window.location.hash.substring(1);
        let objects = new URLSearchParams(hash);

        let search = window.location.search;
        let query = new URLSearchParams(search);

        if (objects.has('access_token')) {
            let access_token = objects.get('access_token');
            this.props.getPersonalAccount(access_token);
        }

        if (query.has('error')) {
            // this.props.history.push ('/auth/admin/login');
        }

    }

    componentDidUpdate (prevProps) {
        if (prevProps.accounts !== this.props.accounts) {

            const { response_code } = this.props.accounts;

            if (response_code !== 200) {
                return this.props.history.push ('/auth/admin/login');
            }

            return this.props.history.push('/admin/dashboard');
        }
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h3>Redirecting ...</h3>
            </div>
        )
    }
}

const mapStateToProps = ({facebook}) => ({
    accounts: facebook.accounts
});

const mapDispatchToProps = {
    getPersonalAccount
};

const enhance = compose (
    withRouter,
    connect (mapStateToProps, mapDispatchToProps)
);

export default enhance(AdminRedirect);

AdminRedirect.propTypes = {
    accounts: PropTypes.object.isRequired,
    getPersonalAccount: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};