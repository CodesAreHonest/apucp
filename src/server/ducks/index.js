import { Router } from 'express';

const router = Router();

import ConfessionRoutes from './confession/route';
import AdminRoutes from './admin/route';

router.use('/', ConfessionRoutes);
router.use('/', AdminRoutes);

export default router;