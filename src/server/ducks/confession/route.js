import {Router} from 'express';

import {postInsert} from './Controller';
import {insertValidation} from "./Validation"

const router = Router();

router.post('/confession/postInsert', insertValidation, postInsert);

export default router;