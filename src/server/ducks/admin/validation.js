import {body} from 'express-validator/check';

export const registerValidation = [

    body ('access_token')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string'),

    body ('expires_in')
        .exists().withMessage('is required')
        .isInt().withMessage('must be a integer'),

];

export const approveConfessionValidation = [

    body ('pendingConfession')
        .exists().withMessage('is required')
        .isArray().withMessage('must be an array')

];