import {Router} from 'express';

import {
    postRegister,
    postApprovePendingConfession
} from './Controller';

import {
    registerValidation,
    approveConfessionValidation
} from "./Validation"

const router = Router();

router.post('/admin/register', registerValidation, postRegister);
router.post('/admin/confessions/approve', approveConfessionValidation, postApprovePendingConfession);

export default router;