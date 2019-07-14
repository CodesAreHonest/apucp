import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    uploadedImages: {
        'first-image': false,
        'second-image': false,
        'third-image': false
    }
};

const imageReducer = createReducer(initialState) ({
    [type.SET_IMAGE_UPLOADED]: (state, action) => {

        const { uploadedImages } = state;

        uploadedImages[action.payload] = true;

        return {
            ...state,
            uploadedImages,
        }
    },

    [type.UNSET_IMAGE_UPLOADED]: (state, action) => {

        const { uploadedImages } = state;

        uploadedImages[action.payload] = false;

        return {
            ...state,
            uploadedImages,
        }
    },

    [type.RESET_IMAGE_UPLOADED]: (state) => {

        return {
            ...state,
            uploadedImages: {
                'first-image': false,
                'second-image': false,
                'third-image': false
            }
        };
    }
});

export default imageReducer;