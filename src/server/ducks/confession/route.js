import { Router } from 'express';

import {
    postInsert,
    getPendingList,
    getApprovedList,
    getRejectedList
} from './controller';
import {
    insertValidation,
    getPendingListValidation,
    getApprovedListValidation,
    getRejectedListValidation
} from "./validation";

import {
    confessorImageUploadValidation
} from "./middleware";

const router = Router();

router.post('/confession/postInsert', confessorImageUploadValidation, insertValidation, postInsert);
router.get('/confession/getPendingList', getPendingListValidation, getPendingList);
router.get('/confession/getApprovedList', getApprovedListValidation, getApprovedList);
router.get('/confession/getRejectedList', getRejectedListValidation, getRejectedList);

export default router;