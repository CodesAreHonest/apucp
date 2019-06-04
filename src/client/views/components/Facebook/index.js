import React, { Component } from 'react';

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sdk: false,
        };

        this.setFbAsyncInit = this.setFbAsyncInit.bind(this);
        this.loadSDKAsync = this.loadSDKAsync.bind(this);
        this.getFBLoginStatus = this.getFBLoginStatus.bind(this);
    }

    componentDidMount() {
        this.setFbAsyncInit();
        this.loadSDKAsync();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sdk !== this.state.sdk) {
            this.getFBLoginStatus();
        }
    }

    loadSDKAsync() {
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = `https://connect.facebook.net/en/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    setFbAsyncInit() {
        window.fbAsyncInit = () => {
            window.FB.init({
                version: 'v3.3',
                xfbml: false,
                appId: '295582987871326',
                autoLogAppEvents: true,
                cookie: true
            });

            this.setState({sdk: true});
        };

    }

    getFBLoginStatus() {
        if (this.state.sdk) {
            window.FB.getLoginStatus((response) => {
                console.log(response);
            })
        }
    }

    render() {
        return (
            <div>
                Facebook Playground
            </div>
        )
    }
}
