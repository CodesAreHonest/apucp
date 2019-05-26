import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import "./pending.css";

import {getPendingConfession} from "../../../../state/ducks/confession/actions";
import ListGroup from "../../../components/ListGroup";

class Pending extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.props.getPendingConfession(1, 15);
    }

    static getDerivedStateFromProps (nextProps, prevState) {

        if (nextProps.pending_data !== prevState.data) {
            return {
                data: nextProps.pending_data,
            }
        }

        return null;
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6 col-sm-5 float-md-left">
                                <button className="btn btn-sm btn-default" style={{marginRight: '10px'}}>
                                    <input type="checkbox" style={{zoom: '1.5'}}/>
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" style={{marginRight: '5px'}}>
                                    <i className="fa fa-times"/>
                                </button>
                                <button type="button" className="btn btn-sm btn-success" style={{marginRight: '5px'}}>
                                    <i className="fa fa-check"/>
                                </button>
                            </div>

                            <div className="col-md-6 col-sm-5 offset-sm-2 offset-md-0 offset-xs-0 col-xs-2 float-md-right text-md-right">

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

                    <ListGroup data={data}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ confession }) => ({
    pending_data: confession.pending_data
});

const mapDispatchToProps = {
    getPendingConfession
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);

Pending.propTypes = {
    getPendingConfession: PropTypes.func.isRequired,
    pending_data: PropTypes.array.isRequired
};