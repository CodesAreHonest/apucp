import {body} from 'express-validator/check';

export const registerValidation = [

    body ('access_token')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string')

];

export const approveConfessionValidation = [

    body ('pendingConfession')
        .exists().withMessage('is required')
        .isArray().withMessage('must be an array')

];

export const rejectConfessionValidation = [

    body('rejectConfession')
        .exists().withMessage('is required')
        .isArray().withMessage('must be an array')

];