import React, { Component } from 'react';
import "./pending.css";

class Pending extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6 float-md-left">
                                <button className="btn btn-sm btn-default">
                                    <input type="checkbox" style={{zoom: '1.5'}}/>
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" style={{marginRight: '5px'}}>
                                    <i className="fa fa-times" style={{marginRight: '5px'}}/>
                                    Decline
                                </button>
                                <button type="button" className="btn btn-sm btn-success" style={{marginRight: '5px'}}>
                                    <i className="fa fa-check" style={{marginRight: '5px'}}/>
                                    Approve
                                </button>
                            </div>

                            <div className="col-md-6 float-md-right text-md-right">

                                <button type="button" className="btn btn-sm btn-light">
                                    Previous
                                </button>

                                <button type="button" className="btn btn-sm" disabled>
                                    1 - 9 of 9
                                </button>

                                <button type="button" className="btn btn-sm btn-light">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Pending;