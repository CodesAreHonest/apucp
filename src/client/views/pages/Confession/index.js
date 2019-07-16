import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Background from "../../UI/background";

import { resetImageUploaded } from "../../../state/ducks/image/actions";

import {
    availableImageUploadSelector, displayImageDivisionSelector
} from "../../../state/ducks/image/selectors";

import "./confessor.css";
import "./button.css";

import ConfessionForm from "./Form";

class Confession extends Component {
    constructor(props) {
        super (props);

        this.state = {
            displayImageDiv: false
        };

        this._uploadImage = this._uploadImage.bind(this);
    }

    _uploadImage() {

        this.setState({
            displayURLInput: false,
        });

        const { uploadedImages } = this.props;

        if (!uploadedImages) {
            return false;
        }

        document.getElementById(uploadedImages).click();
    }

    componentDidUpdate (prevProps) {
        if (prevProps.displayImageDiv !== this.props.displayImageDiv) {
            this.setState({displayImageDiv: this.props.displayImageDiv})
        }
    }

    render() {

        const { displayImageDiv } = this.state;
        const { uploadedImages } = this.props;

        return (
            <div>
                <Background />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 mt-md-5 mt-sm-3 ">
                            <div className="form">
                                <div className="form-header text-center">
                                    Asia Pacific University Confessions
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-md-left text-sm-center text-center mb-2 mb-sm-2">
                                            <small>Your confession will be posted anonymously.</small>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="text-right">

                                            { uploadedImages &&
                                            <div className="button-upload" style={{
                                                minWidth: 'auto', display: 'inline-block'
                                            }}>
                                                <button type="button"
                                                        className="btn btn-sm button-utility"
                                                        onClick={this._uploadImage}
                                                >
                                                    <i className="fa fa-image" />
                                                </button>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <ConfessionForm
                                    displayImageDiv={displayImageDiv}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {

    const uploadedImages = availableImageUploadSelector(state);
    const displayImageDiv = displayImageDivisionSelector(state);

    return {
        uploadedImages, displayImageDiv
    }
};

const mapDispatchToProps = {
    resetImageUploaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Confession);

Confession.propTypes = {
    uploadedImages      : PropTypes.oneOfType([
        PropTypes.string, PropTypes.bool
    ]),
    displayImageDiv     : PropTypes.bool.isRequired,
    resetImageUploaded  : PropTypes.func.isRequired

};