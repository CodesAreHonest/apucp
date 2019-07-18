import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super (props);

        this._onChildrenClick = this._onChildrenClick.bind(this);
    }

    _onChildrenClick() {

        const userDisplayInnerWidth = 766;

        if (window.innerWidth <= userDisplayInnerWidth) {
            let sidebarWrapper = document.querySelector('#wrapper');
            sidebarWrapper.classList.remove('toggled');
        }

    }

    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading text-center">
                    APUCP
                </div>
                <div className="list-group list-group-flush">
                    <Link
                        to="/admin/pending/confessions"
                        className="list-group-item list-group-item-action bg-light"
                        onClick={this._onChildrenClick}
                    >
                        Pending Confession
                    </Link>
                    <Link
                        to="/admin/approved/confessions"
                        className="list-group-item list-group-item-action bg-light"
                        onClick={this._onChildrenClick}
                    >
                        Approved Confession
                    </Link>
                    <Link
                        to="/admin/rejected/confessions"
                        className="list-group-item list-group-item-action bg-light"
                        onClick={this._onChildrenClick}
                    >
                        Rejected Confession
                    </Link>
                </div>
            </div>
        )
    }
}

export default Sidebar;