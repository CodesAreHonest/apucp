import * as type from './types';

export const setImageUploaded = (uploadImageId) => dispatch => {

    dispatch ({
        type: type.SET_IMAGE_UPLOADED,
        payload: uploadImageId
    })
};

export const unsetImageUploaded = (uploadImageId) => dispatch => {
    dispatch ({
        type: type.UNSET_IMAGE_UPLOADED,
        payload: uploadImageId
    })
};

export const resetImageUploaded = () => dispatch => {
    dispatch ({
        type: type.RESET_IMAGE_UPLOADED
    })
};