import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRejectedConfession } from "../../../../state/ducks/confession/actions";
import Pagination from "../../../components/Pagination";
import ListGroup from "../../../components/ListGroup";
import ImageModal from "../../../UI/ImageModal";

class RejectedConfessions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            data: []
        };

        this._getRejectedConfession = this._getRejectedConfession.bind(this);

        document.title = "Rejected Confessions";
        document.getElementById('navbar-brand').innerText = document.title;
    }

    componentDidMount() {
        this._getRejectedConfession();
    }

    static getDerivedStateFromProps (nextProps, prevState) {

        if (nextProps.rejectedData !== prevState.data) {
            return {
                data: nextProps.rejectedData
            }
        }

        return null;
    }

    _getRejectedConfession () {
        const { activePage, recordsPerPage } = this.props;
        const { search } = this.state;
        this.props.getRejectedConfession(activePage , recordsPerPage, search);
    }

    render() {

        const { search, data } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-header" style={{padding: '7px !important'}}>
                        <div className="row">
                            <div className="input-group col-md-4 col-sm-6 col-12">
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
                                        onClick={this._getRejectedConfession}
                                    >Search</button>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-6 col-12 float-md-left">
                                { data.length !== 0 &&
                                <div
                                    style={{paddingRight: 0}}
                                    className="text-center text-md-right text-sm-right"
                                >
                                    <Pagination getData={this._getRejectedConfession}/>
                                </div> }
                            </div>
                        </div>
                    </div>

                    <ListGroup data={data} type="Rejected" />
                </div>

                <ImageModal />
            </div>
        )
    }
}

const mapStateToProps = ({confession}) => {
    return {
        rejectedData: confession.data,
        activePage: confession.activePage,
        recordsPerPage: confession.recordsPerPage,
    }
};

const mapDispatchToProps = {
    getRejectedConfession
};

export default connect(mapStateToProps, mapDispatchToProps)(RejectedConfessions);

RejectedConfessions.propTypes = {
    getRejectedConfession: PropTypes.func.isRequired,

    rejectedData: PropTypes.array.isRequired,
    activePage: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,
};