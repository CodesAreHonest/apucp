import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading text-center">
                    APUCP
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/admin" className="list-group-item list-group-item-action bg-light">
                        Dashboard
                    </Link>
                    <Link to="/admin/cart" className="list-group-item list-group-item-action bg-light">
                        Pending Confession
                    </Link>
                </div>
            </div>
        )
    }
}

export default Sidebar;