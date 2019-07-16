import React, { Component } from 'react';
import ImageUploadWithPreview from "../ImageUploadWithPreview";

class BatchImageUpload extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="row no-gutters">
                <div className="col-4 col-sm-3">
                    <ImageUploadWithPreview id="first-image"/>
                </div>

                <div className="col-4 col-sm-3">
                    <ImageUploadWithPreview id="second-image"/>
                </div>

                <div className="col-4 col-sm-3">
                    <ImageUploadWithPreview id="third-image" />
                </div>

            </div>
        )
    }
}


export default BatchImageUpload;
