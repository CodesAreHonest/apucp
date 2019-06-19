import React, { Component } from 'react';
import { Redirect } from "react-router";

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(){
    //     this.props.history.push ('/')
    // }

    render() {
        return (
            <Redirect to="/" />
        )
    }
}

export default NotFound;