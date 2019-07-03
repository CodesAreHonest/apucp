import { Router } from 'express';
import multer from 'multer';

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
} from "./validation"

const router = Router();
const upload = multer();

router.post('/confession/postInsert',upload.single('images'), insertValidation,  postInsert);
router.get('/confession/getPendingList', getPendingListValidation, getPendingList);
router.get('/confession/getApprovedList', getApprovedListValidation, getApprovedList);
router.get('/confession/getRejectedList', getRejectedListValidation, getRejectedList);

export default router;