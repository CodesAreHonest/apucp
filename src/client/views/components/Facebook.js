import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    constructor(props) {
        super(props);

        this.responseFacebook = this.responseFacebook.bind(this);

        this.isLoggedIn = false;
    }

    responseFacebook(response) {

        if (response.status === 'undefined') {
            this.isLoggedIn = false;
            return this.isLoggedIn
        }
        else {
            console.log (response);
            this.setState({
                isLoggedIn: true,
                userID: response.userID,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            }, () => {
                console.log (this.state);
            })
        }
    }

    render() {

        return (
            <div>
                {!this.isLoggedIn &&
                <FacebookLogin
                    appId="295582987871326"
                    size="small"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="manage_pages,publish_pages"
                    callback={this.responseFacebook}
                    icon="fa-facebook"
                    version="3.2"
                />}

            </div>
        )
    }
}

export default Facebook;