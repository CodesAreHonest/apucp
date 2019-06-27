import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {postLogout} from "../../../../state/ducks/facebook/actions";

import "./header.css";
import NavbarBrand from "../../NavbarBrand";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    static hideSideBar() {

        let wrapper = document.querySelector('#wrapper');
        wrapper.classList.toggle('toggled');
    }

    static toggleHeader() {
        let wrapper = document.querySelector('#navbarHeaderContent');
        wrapper.classList.toggle('show');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.logoutResponse !== this.props.logoutResponse) {
            const { response_code, response_uri } = this.props.logoutResponse;

            if (response_code === 200) {
                window.location.href = response_uri;
            }
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <span
                    id="menu-toggle"
                    onClick={this.constructor.hideSideBar}
                    className="navbar-toggler-icon btn"
                    style={{
                        padding: '12px',
                        margin: '7px',
                        cursor: 'pointer'
                    }}
                />

                <NavbarBrand />

                <button className="navbar-toggler" type="button" onClick={this.constructor.toggleHeader}>
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`collapse navbar-collapse`} id="navbarHeaderContent">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={this.props.postLogout} style={{cursor: 'pointer'}}>
                                Logout <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({facebook}) => {
    return {
        logoutResponse: facebook.logoutResponse
    }
};

const mapDispatchToProps = {
    postLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
    logoutResponse: PropTypes.array.isRequired,
    postLogout: PropTypes.func.isRequired

};