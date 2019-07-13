import React, { Component } from 'react';
import "./style.css";
import { connect } from 'react-redux';
import { setImageUploaded } from "../../../state/ducks/image/actions";
import PropTypes from 'prop-types';

class ImageUploadWithPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileUrl: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({fileUrl: URL.createObjectURL(e.target.files[0])})
        this.props.setImageUploaded(this.props.id);
    }

    render() {

        const { fileUrl } = this.state;
        const { id } = this.props;

        return (
            <div style={{borderRadius: '10px'}}>
                { fileUrl !== null &&
                <div className="text-center" style={{position: 'relative'}}>
                    <i className="fa fa-times del" />
                    <img src={fileUrl} alt="uploaded image" style={{border: '1px solid lightgrey', maxWidth: '100%', maxHeight: '100%', borderRadius: '10px'}}/>
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

const mapDispatchToProps = {
    setImageUploaded
};

export default connect(null, mapDispatchToProps)(ImageUploadWithPreview);

ImageUploadWithPreview.propTypes = {
    id: PropTypes.string.isRequired,
    setImageUploaded: PropTypes.func.isRequired
};
