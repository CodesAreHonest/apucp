import * as type from './types';

export const setImageUploaded = (uploadImageId) => dispatch => {

    dispatch ({
        type: type.SET_IMAGE_UPLOADED,
        payload: uploadImageId
    })
};