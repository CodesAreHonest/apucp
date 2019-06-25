import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toastLoading, toastSuccess, toastError } from "../../../UI/sweetalert2";

import "./pending.css";

import {
    getPendingConfession, postApproveConfessions, postRejectConfessions
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
        this._rejectConfession     = this._rejectConfession.bind(this);
        this._getPendingConfession = this._getPendingConfession.bind(this);
    }

    _approveConfession() {
        toastLoading();
        this.props.postApproveConfessions(this.props.pendingConfession);
    }

    _rejectConfession() {
        toastLoading();
        this.props.postRejectConfessions(this.props.pendingConfession);
    }

    _getPendingConfession() {
        const { activePage, recordsPerPage } = this.props;
        this.props.getPendingConfession(activePage , recordsPerPage);
    }

    componentDidMount() {
        this._getPendingConfession();
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
                this._getPendingConfession();
                return toastSuccess()
            }

            return toastError();
        }

        if (prevProps.rejectConfessionResponse !== this.props.rejectConfessionResponse) {

            const { response_code } = this.props.rejectConfessionResponse;

            if (parseInt(response_code) === 200) {
                this._getPendingConfession();
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
                            <div className="col-md-6 col-sm-5 text-md-left text-sm-left text-center">
                                {/*<button className="btn btn-sm btn-default" style={{marginRight: '10px'}}>*/}
                                {/*    <input type="checkbox" style={{zoom: '1.5'}}/>*/}
                                {/*</button>*/}
                                <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    style={{marginRight: '5px'}}
                                    disabled={disabled}
                                    onClick={this._rejectConfession}
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
                            <div className="col-md-6 col-sm-5 text-md-right text-sm-right text-center">
                                <Pagination getData={this._getPendingConfession}/>
                            </div>
                            }

                        </div>
                    </div>

                    <ListGroup data={data} type="Pending"/>
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
    rejectConfessionResponse: confession.reject_confession_response,
});

const mapDispatchToProps = {
    getPendingConfession, postApproveConfessions, postRejectConfessions
};

export default connect(mapStateToProps, mapDispatchToProps)(Pending);

Pending.propTypes = {
    getPendingConfession: PropTypes.func.isRequired,
    postApproveConfessions: PropTypes.func.isRequired,
    postRejectConfessions: PropTypes.func.isRequired,

    pending_data: PropTypes.array.isRequired,
    pendingConfession: PropTypes.array.isRequired,
    activePage: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,

    approveConfessionResponse: PropTypes.object.isRequired,
    rejectConfessionResponse: PropTypes.object.isRequired

};