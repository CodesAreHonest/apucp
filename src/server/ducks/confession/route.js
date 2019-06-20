import { Router } from 'express';

import { postInsert, getPendingList, getApprovedList } from './Controller';
import {
    insertValidation,
    getPendingListValidation,
    getApprovedListValidation
} from "./Validation"

const router = Router();

router.post('/confession/postInsert', insertValidation, postInsert);
router.get('/confession/getPendingList', getPendingListValidation, getPendingList);
router.get('/confession/getApprovedList', getApprovedListValidation, getApprovedList);

export default router;