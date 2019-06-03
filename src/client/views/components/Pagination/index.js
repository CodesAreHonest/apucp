import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
    getPendingConfession,
    incrementActivePage,
    decrementActivePage
} from "../../../state/ducks/confession/actions";

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.activePage !== this.props.activePage) {
            const { activePage, recordsPerPage } = this.props;
            this.props.getPendingConfession(activePage, recordsPerPage);
        }
    }

    prevPage (activePage) {
        this.props.decrementActivePage(activePage);
    }

    nextPage (activePage) {
        this.props.incrementActivePage(activePage);
    }

    render() {

        const { recordsFrom, recordsTo, totalPages, totalRecords, activePage } = this.props;

        return (
            <Fragment>
                <button
                    type="button"
                    className="btn btn-sm btn-light"
                    disabled={activePage <= 1}
                    onClick={() => this.prevPage(activePage)}
                >
                    Previous
                </button>

                <button type="button" className="btn btn-sm" disabled>
                    {`${recordsFrom} - ${recordsTo} of ${totalRecords}`}
                </button>

                <button
                    type="button"
                    className="btn btn-sm btn-light"
                    disabled={activePage >= totalPages}
                    onClick={() => this.nextPage(activePage)}
                >
                    Next
                </button>
            </Fragment>

        )
    }
}

const mapStateToProps = ({ confession }) => ({
    recordsFrom: confession.recordsFrom,
    recordsTo: confession.recordsTo,
    totalPages: confession.totalPages,
    totalRecords: confession.totalRecords,

    activePage: confession.activePage,
    recordsPerPage: confession.recordsPerPage
});

const mapDispatchToProps = {
    getPendingConfession,
    incrementActivePage, decrementActivePage
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.propTypes = {
    recordsFrom: PropTypes.number.isRequired,
    recordsTo: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    totalRecords: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,

    getPendingConfession: PropTypes.func.isRequired,
    incrementActivePage: PropTypes.func.isRequired,
    decrementActivePage: PropTypes.func.isRequired,
};