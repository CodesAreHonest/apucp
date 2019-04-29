import {Router} from 'express';
const router = Router();

import ConfessionRoutes from './Confession/Route';
import AdminRoutes from './Admin/Route';

router.use('/', ConfessionRoutes);
router.use('/', AdminRoutes);

export default router;