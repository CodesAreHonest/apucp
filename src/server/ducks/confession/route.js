import { Router } from 'express';

import {
    postInsert,
    getPendingList,
    getApprovedList,
    getRejectedList
} from './Controller';
import {
    insertValidation,
    getPendingListValidation,
    getApprovedListValidation,
    getRejectedListValidation
} from "./Validation"

const router = Router();

router.post('/confession/postInsert', insertValidation, postInsert);
router.get('/confession/getPendingList', getPendingListValidation, getPendingList);
router.get('/confession/getApprovedList', getApprovedListValidation, getApprovedList);
router.get('/confession/getRejectedList', getRejectedListValidation, getRejectedList);

export default router;