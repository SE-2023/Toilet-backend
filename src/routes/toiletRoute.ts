import express from 'express';
import { createToilet, getAlltoiletPrivate } from '../controllers/toiletController';
import { authentication } from '../middleware/verifyHeader';
import { toiletValidation, validate } from '../middleware/vaildator';

const router = express.Router();
router.get('/', getAlltoiletPrivate);
// router.use(authentication);
router.post('/', toiletValidation(), validate, createToilet);

export default router;
