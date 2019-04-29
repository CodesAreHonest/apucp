import {Router} from 'express';

import {postRegister} from './Controller';
import {registerValidation} from "./Validation"

const router = Router();

router.post('/admin/register', registerValidation, postRegister);

export default router;