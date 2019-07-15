import React, { Component } from 'react';
import "./style.css";
import { connect } from 'react-redux';
import { setImageUploaded, unsetImageUploaded } from "../../../state/ducks/image/actions";
import PropTypes from 'prop-types';
import { displayImageDivisionSelector } from "../../../state/ducks/image/selectors";

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
                    width: 'inherit', height: '20vh',
                }}>
                    <i className="fa fa-times del" onClick={this._removeImage}/>
                    <div style={{
                        backgroundImage: `url(${fileUrl})`,
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        maxHeight: '80%',
                        minHeight: '100%',
                        backgroundSize: 'cover',
                        transform: 'rotate(0deg)',
                        borderRadius: '10px'
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
