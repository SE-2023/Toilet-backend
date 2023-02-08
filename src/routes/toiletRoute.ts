import express from 'express';
import { createToilet } from '../controllers/toiletController';
import { authentication } from '../middleware/verifyHeader';

const router = express.Router();
// router.get('/', getAllLocation);
// router.use(authentication);
router.post('/', createToilet);

export default router;
