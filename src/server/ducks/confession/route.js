import { Router } from 'express';

import { postInsert, getPendingList } from './Controller';
import { insertValidation, getPendingListValidation } from "./Validation"

const router = Router();

router.post('/confession/postInsert', insertValidation, postInsert);
router.get('/confession/getPendingList', getPendingListValidation, getPendingList);

export default router;