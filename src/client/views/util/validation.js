const validateFileSize5MB = ( fileSize ) => {

    const maxFileSize = 500000;

    if (fileSize >= maxFileSize) {

        const fileSizeinMB = (fileSize / 100000).toFixed(2);

        return {
            response_code: 422,
            response_msg: `File size should not exceed 5MB`,
            response_notice: `Current file size is ${fileSizeinMB} MB`
        }
    }

    return {
        response_code: 200,
        response_msg: "success"
    }
};

const validateFileType = ( fileType ) => {

    const allowFileType = [
        "image/png", "image/jpg", "image/jpeg"
    ];

    const validFormat = allowFileType.find(value => value === fileType);

    if (!validFormat) {
        return {
            response_code: 422,
            response_msg: 'Only allow PNG, JPG or JPEG'
        }
    }

    return {
        response_code: 200,
        response_msg: "success"
    }
};

export { validateFileSize5MB, validateFileType };