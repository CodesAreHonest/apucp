import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApprovedConfession } from "../../../../state/ducks/confession/actions";
import Pagination from "../../../components/Pagination";

class Approve extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
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
    }

    _getApprovedConfession() {
        const { activePage, recordsPerPage } = this.props;
        this.props.getApprovedConfession(activePage , recordsPerPage);
    }

    render() {

        const { data } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header" style={{padding: '7px !important'}}>
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-sm-5 float-md-left">
                                { data.length !== 0 &&
                                <div className="col-md-12 col-sm-5 offset-sm-2 offset-md-0 offset-xs-0 col-xs-2 float-md-right text-md-right">
                                    <Pagination getData={this._getApprovedConfession}/>
                                </div> }
                            </div>
                        </div>
                    </div>
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