
import {validationResult} from 'express-validator/check';
import multer from 'multer';
import uuid from "uuid/v1";

export const validationHandler = (req, res, next) => {

    const errorFormatter = ({msg, param}) => {
        return `${param} ${msg}`;
    };

    const result = validationResult(req).formatWith(errorFormatter);

    if (result.isEmpty()) {
        return {
            response_code: 200,
            response_msg: "Validation Success"
        }
    }

    if (!next) {
        return {
            response_code: 422,
            response_msg: 'Unprocessable Entity',
            response_detail: result.array(),
            data: []
        };
    }
};

const maxFileSize = 1000 * 1000; // b * 1000000 = mb

export const confessionImageUploadSettings = multer({
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, 'storage/confession')
        },
        filename: (request, file, callback) => {
            let extensionArray = file.mimetype.split("/");
            let extension = extensionArray[1];
            callback(null, `${uuid()}.${extension}`)
        }
    }),
    fileFilter: (request, file, callback) => {
        if (file.mimetype === 'image/png') {
            return callback(null, true);
        }

        if (file.mimetype === 'image/jpg') {
            return callback(null, true);
        }

        if (file.mimetype === 'image/jpeg') {
            return callback(null, true);
        }

        return callback (new Error('The file type must be JPG, PNG or JPEG.'))

    },
    limits: {fileSize: maxFileSize}
}).array('images', 5);