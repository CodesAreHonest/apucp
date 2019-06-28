import {Router} from 'express';

import {
    postRegister,
    postApprovePendingConfession,
    postRejectPendingConfession,
    postLogout
} from './controller';

import {
    registerValidation,
    approveConfessionValidation,
    rejectConfessionValidation
} from "./validation"

const router = Router();

router.post('/admin/register', registerValidation, postRegister);
router.post('/admin/confessions/approve', approveConfessionValidation, postApprovePendingConfession);
router.post('/admin/confessions/reject', rejectConfessionValidation, postRejectPendingConfession);
router.post('/admin/logout', postLogout);

export default router;