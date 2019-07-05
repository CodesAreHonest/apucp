import * as type from './types';

export const openModal = () => dispatch => {

    dispatch ({
        type: type.OPEN_MODAL,
    })
};

export const closeModal = () => dispatch => {

    dispatch ({
        type: type.CLOSE_MODAL,
    })
};