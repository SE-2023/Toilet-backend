import express from 'express';
import { createComment } from '../controllers/commentController';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();
// router.get('/', getAlltoiletPrivate);
// router.use(authentication);
router.post('/', createComment);

export default router;
