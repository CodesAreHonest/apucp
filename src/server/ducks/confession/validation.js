import {body} from 'express-validator/check';

export const insertValidation = [

    body ('content')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string')

];

export const getPendingListValidation = [

    body ('page')
        .exists().withMessage('is required')
        .isInt({ min: 1 }).withMessage('must be an integer with minimum one'),

    body ('limit')
        .exists().withMessage('is required')
        .isInt({ min: 1 }).withMessage('must be an integer with minimum one')
];