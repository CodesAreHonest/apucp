import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./style.css";
import { connect } from 'react-redux';
import { setImageUploaded, unsetImageUploaded } from "../../../state/ducks/image/actions";
import { displayImageDivisionSelector } from "../../../state/ducks/image/selectors";
import {validateFileSize5MB, validateFileType} from "../../util/validation";

import { customToastError } from "../sweetalert2";

class ImageUploadWithPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileUrl: null,
        };

        this.defaultState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this._removeImage = this._removeImage.bind(this);
    }

    handleChange(e) {

        const FILE_SIZE = e.target.files[0].size;
        const validateFileSizeOutcome = validateFileSize5MB(FILE_SIZE);

        if (validateFileSizeOutcome.response_code === 422) {
            const {response_msg} = validateFileSizeOutcome;
            customToastError(response_msg);
            return false;
        }

        const FILE_TYPE = e.target.files[0].type;
        const validateFileTypeOutcome = validateFileType(FILE_TYPE);

        if (validateFileTypeOutcome.response_code === 422) {
            const {response_msg} = validateFileTypeOutcome;
            customToastError(response_msg);
            return false;
        }
        this.setState({fileUrl: URL.createObjectURL(e.target.files[0])});
        this.props.setImageUploaded(this.props.id);
    }

    _removeImage() {
        this.setState(this.defaultState);
        document.getElementById(this.props.id).value = "";
        this.props.unsetImageUploaded(this.props.id);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.imageDisplayDivision !== this.props.imageDisplayDivision) {
            if (!this.props.imageDisplayDivision) {
                this._removeImage();
            }
        }
    }

    render() {

        const { fileUrl } = this.state;
        const { id } = this.props;

        return (
            <div style={{padding: '5px'}}>
                { fileUrl !== null &&
                <div className="text-center" style={{
                    position: 'relative',
                    width: 'inherit', height: '13vh',
                }}>
                    <i className="fa fa-times del" onClick={this._removeImage}/>
                    <div style={{
                        backgroundImage: `url(${fileUrl})`,
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        maxHeight: '13vh',
                        minHeight: '13vh',
                        backgroundSize: 'cover',
                        transform: 'rotate(0deg)',
                        borderRadius: '10px',
                        boxShadow: '0 0 9px #ccc',
                        border: '1px solid white'
                    }} />
                </div> }
                <input type="file"
                       id={id}
                       name="images"
                       accept="image/jpeg,image/jpg,image/png"
                       onChange={this.handleChange}
                       style={{display: 'none'}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const imageDisplayDivision = displayImageDivisionSelector(state);

    return {
        imageDisplayDivision: imageDisplayDivision
    }
};

const mapDispatchToProps = {
    setImageUploaded, unsetImageUploaded
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadWithPreview);

ImageUploadWithPreview.propTypes = {
    id: PropTypes.string.isRequired,
    setImageUploaded: PropTypes.func.isRequired,
    unsetImageUploaded: PropTypes.func.isRequired,
    imageDisplayDivision: PropTypes.bool.isRequired
};
