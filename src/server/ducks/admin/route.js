import {Router} from 'express';

import {
    postRegister,
    postApprovePendingConfession,
    postRejectPendingConfession
} from './Controller';

import {
    registerValidation,
    approveConfessionValidation,
    rejectConfessionValidation
} from "./Validation"

const router = Router();

router.post('/admin/register', registerValidation, postRegister);
router.post('/admin/confessions/approve', approveConfessionValidation, postApprovePendingConfession);
router.post('/admin/confessions/reject', rejectConfessionValidation, postRejectPendingConfession);

export default router;