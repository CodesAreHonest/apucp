import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApprovedConfession } from "../../../../state/ducks/confession/actions";
import Pagination from "../../../components/Pagination";
import ListGroup from "../../../components/ListGroup";

class Approve extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: ''
        };

        this._getApprovedConfession = this._getApprovedConfession.bind(this);
    }

    componentDidMount() {
        this._getApprovedConfession();
    }

    static getDerivedStateFromProps (nextProps, prevState) {

        if (nextProps.approvedData !== prevState.data) {
            return {
                data: nextProps.approvedData
            }
        }

        return null;
    }

    _getApprovedConfession() {
        const { activePage, recordsPerPage } = this.props;
        const { search } = this.state;
        this.props.getApprovedConfession(activePage , recordsPerPage, search);
    }

    render() {

        const { data, search } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header" style={{padding: '7px !important'}}>
                        <div className="row">
                            <div className="input-group col-md-4">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="#APUCP000001"
                                    value={search}
                                    onChange={e => this.setState({search: e.target.value})}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        type="button"
                                        onClick={this._getApprovedConfession}
                                    >Search</button>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-5 float-md-left">
                                { data.length !== 0 &&
                                <div
                                    style={{paddingRight: 0}}
                                    className="text-right"
                                >
                                    <Pagination getData={this._getApprovedConfession}/>
                                </div> }
                            </div>
                        </div>
                    </div>

                    <ListGroup data={data} type="Approved" />

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({confession}) => ({
    approvedData: confession.data,

    activePage: confession.activePage,
    recordsPerPage: confession.recordsPerPage,
    pendingConfession: confession.pendingList,
});

const mapDispatchToProps = {
    getApprovedConfession
};

export default connect(mapStateToProps, mapDispatchToProps)(Approve);

Approve.propTypes = {
    getApprovedConfession: PropTypes.func.isRequired,
    activePage      : PropTypes.number.isRequired,
    recordsPerPage  : PropTypes.number.isRequired,
    approvedData    : PropTypes.array.isRequired
};