import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../../state/ducks/modal/actions";
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor(props) {
        super(props);

        this._closeModal = this._closeModal.bind(this);
    }

    _closeModal() {
        this.props.closeModal();
    }

    render() {

        const showHideClassName = this.props.openStatus ? 'modal display-block fade' :
            'modal display-none fade';

        return (
            <div className={showHideClassName} id="modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-title">Modal title</h5>
                            <button type="button" className="close" onClick={this._closeModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this._closeModal}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({modal}) => {
    return {
        openStatus: modal.openStatus
    }
};

const mapDispatchToProps = {
    closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
    openStatus: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};