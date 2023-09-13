import express from 'express';
import { getChartPostEachDay, getSummary, getTopReview } from '../controllers/dashboardController';

const router = express.Router();
router.get('/chart-post', getChartPostEachDay);
router.get("/summary", getSummary);
router.get("/top-review", getTopReview)

export default router;
