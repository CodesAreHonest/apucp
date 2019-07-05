import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../../state/ducks/modal/actions";
import { clearDisplayImage } from "../../../state/ducks/confession/actions";
import PropTypes from 'prop-types';

class ImageModal extends Component {
    constructor(props) {
        super(props);

        this._closeModal = this._closeModal.bind(this);
    }

    _closeModal() {
        this.props.clearDisplayImage();
        this.props.closeModal();
    }

    render() {

        const { openStatus, imageList } = this.props;

        const showHideClassName = openStatus ?
            'modal d-block' :
            'modal d-none';

        const images = imageList.map ((image, key) => (
            <img key={key}
                 src={`/images/${image}`}
                 width={200}
                 height={200}
                 alt="confession images"
                 style={{margin: '10px', border: '1px solid black'}}
            />
        ));

        return (
            <div>
                <div className={showHideClassName} id="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{padding: '5px 18px'}}>
                                <h5 className="modal-title text-center">Confession Images</h5>
                                <button type="button" className="close" onClick={this._closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center" style={{padding: 'none', backgroundColor: '#8080801f'}}>
                                { images }
                            </div>
                        </div>
                    </div>
                </div>

                { openStatus &&
                <div className="modal-backdrop" style={{opacity: 0.5}} /> }
            </div>
        )
    }
}

const mapStateToProps = ({modal, confession}) => ({
    openStatus: modal.openStatus,
    imageList: confession.imageList
});

const mapDispatchToProps = {
    closeModal, clearDisplayImage
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);

ImageModal.propTypes = {
    openStatus: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    clearDisplayImage: PropTypes.func.isRequired,
    imageList: PropTypes.array.isRequired
};