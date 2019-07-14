import React, { Component, Fragment} from 'react';
import ImageUploadWithPreview from "../ImageUploadWithPreview";

class BatchImageUpload extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Fragment>
                <ImageUploadWithPreview id="first-image"/>
                <ImageUploadWithPreview id="second-image"/>
                <ImageUploadWithPreview id="third-image"/>
            </Fragment>
        )
    }
}


export default BatchImageUpload;
