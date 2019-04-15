import {Router} from 'express';
const router = Router();

import ConfessionRoutes from './Confession/Route';

router.use('/', ConfessionRoutes);

export default router;