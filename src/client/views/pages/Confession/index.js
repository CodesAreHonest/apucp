import React, { Component } from 'react';
import Background from "../../UI/background";

import "./index.css";

class Confession extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div>
                <Background />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 mt-md-5 mt-sm-3 ">
                            <div className="form">
                                <div className="form-header text-center">
                                    Asia Pacific University Confessions
                                </div>

                                <hr />

                                <small>Your confession will be posted anonymously.</small>
                                <textarea
                                    className="form-control text-area"
                                    placeholder="Confess Here ..."
                                />

                                <div className="row">
                                    <div className="col-md-4 offset-md-4 text-left">
                                        <button className="btn btn-sm btn-primary btn-block">
                                            Submit
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Confession;