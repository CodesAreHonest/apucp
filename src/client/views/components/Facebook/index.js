import React, { Component } from 'react';
import {paramEncoding} from "../../../util/encoding";

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sdk: false,
        };

        this.loginFacebook = this.loginFacebook.bind(this);
    }

    loginFacebook() {

        const params = {
            auth_type: 'rerequest',
            response_type: 'token',
            display: 'popup',
            client_id: '295582987871326',
            redirect_uri: 'http://localhost:3000/admin',
            version: 'v3.3',
            scope: 'manage_pages,publish_pages',
        };

        const queryString = paramEncoding(params);

        window.location.href = `https://www.facebook.com/v3.3/dialog/oauth?${queryString}`;

    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.loginFacebook}>
                    Connect to Facebook
                </button>
            </div>
        )
    }
}
