import express from 'express';
import { getJobs, createJob } from '../controllers/jobController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/', authMiddleware, createJob);

export default router;
