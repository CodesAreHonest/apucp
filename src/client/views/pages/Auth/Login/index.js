import React, {Component} from "react";

import FacebookLogin from '../../../components/facebook';

import "./index.css";

class AdminLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="admin-login-background">
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col-md-6 mt-5">
                            <FacebookLogin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;