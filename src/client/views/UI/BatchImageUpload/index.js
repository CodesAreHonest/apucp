import React, { Component } from 'react';
import ImageUploadWithPreview from "../ImageUploadWithPreview";

class BatchImageUpload extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="row">
                <div className="col-4">
                    <ImageUploadWithPreview id="first-image"/>
                </div>

                <div className="col-4">
                    <ImageUploadWithPreview id="second-image"/>
                </div>

                <div className="col-4">
                    <ImageUploadWithPreview id="third-image"/>
                </div>
            </div>
        )
    }
}


export default BatchImageUpload;
