import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toastLoading, toastSuccess, toastError } from "../../../UI/sweetalert2";

import "./pending.css";

import {
    getPendingConfession, postApproveConfessions
} from "../../../../state/ducks/confession/actions";
import ListGroup from "../../../components/ListGroup";
import Pagination from "../../../components/Pagination";

class Pending extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: []
        };

        this._approveConfession = this._approveConfession.bind(this);
    }

    _approveConfession() {
        toastLoading();
        this.props.postApproveConfessions(this.props.pendingConfession);
    }

    componentDidMount() {
        const { activePage, recordsPerPage } = this.props;
        this.props.getPendingConfession(activePage , recordsPerPage);
    }

    static getDerivedStateFromProps (nextProps, prevState) {

        if (nextProps.pending_data !== prevState.data) {
            return {
                data: nextProps.pending_data,
            }
        }

        return null;
    }

    componentDidUpdate (prevProps) {
        if (prevProps.approveConfessionResponse !== this.props.approveConfessionResponse) {

            const { response_code } = this.props.approveConfessionResponse;

            if (response_code === 200) {
                const { activePage, recordsPerPage } = this.props;
                this.props.getPendingConfession(activePage , recordsPerPage);
                return toastSuccess()
            }

            return toastError();
        }
    }

    render() {
        const { data } = this.state;
        const { pendingConfession } = this.props;

        const disabled = pendingConfession.length === 0;

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6 col-sm-5 float-md-left">
                                <button className="btn btn-sm btn-default" style={{marginRight: '10px'}}>
                                    <input type="checkbox" style={{zoom: '1.5'}}/>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    style={{marginRight: '5px'}}
                                    disabled={disabled}
                                >
                                    <i className="fa fa-times" style={{marginRight: '5px'}}/>
                                    Reject
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success"
                                    style={{marginRight: '5px'}}
                                    disabled={disabled}
                                    onClick={this._approveConfession}
                                >
                                    <i className="fa fa-check" style={{marginRight: '5px'}}/>
                                    Approve
                                </button>
                            </div>

                            { data.length !== 0 &&
                            <div className="col-md-6 col-sm-5 offset-sm-2 offset-md-0 offset-xs-0 col-xs-2 float-md-right text-md-right">
                                <Pagination />
                            </div>
                            }

                        </div>
                    </div>

                    <ListGroup data={data}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ confession }) => ({
    pending_data: confession.data,

    activePage: confession.activePage,
    recordsPerPage: confession.recordsPerPage,
    pendingConfession: confession.pendingList,

    approveConfessionResponse: confession.approve_confession_response,
});

const mapDispatchToProps = {
    getPendingConfession, postApproveConfessions
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);

Pending.propTypes = {
    getPendingConfession: PropTypes.func.isRequired,
    postApproveConfessions: PropTypes.func.isRequired,

    pending_data: PropTypes.array.isRequired,
    pendingConfession: PropTypes.array.isRequired,
    activePage: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,

    approveConfessionResponse: PropTypes.object.isRequired

};