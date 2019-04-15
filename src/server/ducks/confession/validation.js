import {body} from 'express-validator/check';

export const insertValidation = [

    body ('content')
        .exists().withMessage('is required')
        .isString().withMessage('must be a string')

];