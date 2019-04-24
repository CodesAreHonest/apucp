import React, { Component } from "react";

import FacebookLogin from '../../../components/Facebook';

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="layout">

                            123
                            <FacebookLogin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;