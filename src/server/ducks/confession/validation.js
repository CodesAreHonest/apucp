import {body} from 'express-validator/check';

export const insertValidation = [

    body ('confession')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string')
        .isLength({ min: 10 }).withMessage('must be at least 10 characters.')

];

export const getPendingListValidation = [

    body ('page')
        .exists().withMessage('is required')
        .isInt({ min: 1 }).withMessage('must be an integer with minimum one'),

    body ('limit')
        .exists().withMessage('is required')
        .isInt({ min: 1 }).withMessage('must be an integer with minimum one')
];