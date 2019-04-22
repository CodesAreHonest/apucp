import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    static loadFbScript() {
        const script = document.createElement("script");

        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&autoLogAppEvents=1&version=v3.2&appId=295582987871326";
        script.async = true;
        script.defer = true;
        script.crossorigin = "anonymous";

        document.body.appendChild(script);

    }

    componentDidMount () {

        Login.loadFbScript();

    }

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="layout">
                            <div id="fb-root" />
                            <div
                                className="fb-login-button"
                                data-size="medium"
                                data-button-type="login_with"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;