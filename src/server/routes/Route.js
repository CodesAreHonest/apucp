import express from 'express';
import controller from '../controllers/TestController';

const router = express.Router();
const { test } = controller;

router.get('/api/getUsername', test);

export default router;