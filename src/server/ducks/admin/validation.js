import {body} from 'express-validator/check';

export const registerValidation = [

    // body ('user_id')
    //     .exists().withMessage('is required')
    //     .isString().withMessage('must be a string'),
    //
    // body ('name')
    //     .exists().withMessage('is required')
    //     .isString().withMessage('must be a string'),
    //
    // body ('email')
    //     .exists().withMessage('is required')
    //     .isEmail().withMessage('must be an email'),
    //
    // body ('picture')
    //     .exists().withMessage('is required')
    //     .isURL().withMessage('must be a URL'),

    body ('access_token')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string')

];