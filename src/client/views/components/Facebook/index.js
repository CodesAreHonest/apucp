import React, { Component } from 'react';
import {paramEncoding} from "../../../util/encoding";

import "./facebook.css";

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.loginFacebook = this.loginFacebook.bind(this);
    }

    loginFacebook() {

        const { protocol, hostname, port } = window.location;

        const url = `${protocol}//${hostname}:${port}/auth/admin/redirect`;

        const params = {
            auth_type: 'rerequest',
            response_type: 'token',
            display: 'popup',
            client_id: '295582987871326',
            redirect_uri: url,
            version: 'v3.3',
            scope: '',
        };

        const queryString = paramEncoding(params);

        window.location.href = `https://www.facebook.com/v3.3/dialog/oauth?${queryString}`;
    }

    render() {
        return (
            <div>
                <button className="login-with-fb-button" onClick={this.loginFacebook}>
                    Login with Facebook
                </button>
            </div>
        )
    }
}
