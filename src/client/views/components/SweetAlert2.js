import Swal from 'sweetalert2';

export const loading = (title) => {

    Swal.fire({
        title: title,
        position: 'center',
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        },
    })

};

export const success = (title = '', text = '') => {

    Swal.fire({
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        type: 'success',
        title,
        text
    });

};

export const error = (title = '', text = '') => {

    Swal.fire({
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        type: 'error',
        title,
        text
    });

};