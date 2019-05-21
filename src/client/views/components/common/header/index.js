import React, { Component } from "react";

import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    static hideSideBar() {

        let wrapper = document.querySelector('#wrapper');
        wrapper.classList.toggle('toggled');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-default" id="menu-toggle" onClick={this.constructor.hideSideBar}>
                    <span className="navbar-toggler-icon" />
                </button>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Logout <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;