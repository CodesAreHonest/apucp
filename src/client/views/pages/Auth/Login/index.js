import React, {Component} from "react";

import FacebookLogin from '../../../components/Facebook';

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

                            <div style={{
                                fontSize: '12px', marginTop: '10px'
                            }}>
                                By clicking Login, you allow this app to use your information in accordance
                                with their respective <br />
                                <a href="/auth/admin/policy" target="_blank" className="mr-1">
                                    <b>Term of Service</b>
                                </a>
                                    and
                                <a href="/auth/admin/policy" target="_blank" className="ml-1">
                                    <b>Privacy Policies</b>
                                </a>.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;