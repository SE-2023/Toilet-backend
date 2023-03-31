import express from 'express';
import {
    createToilet,
    deleteMyToilet,
    getAlltoiletPrivate,
    getMytoilet,
    updateToilet,
} from '../controllers/toiletController';
import { authentication } from '../middleware/verifyHeader';
import { toiletValidation, validate } from '../middleware/vaildator';

const router = express.Router();
router.get('/', getAlltoiletPrivate);
router.get('/mytoilet', getMytoilet);
router.put('/updateToilet', updateToilet);
router.delete('/delete', deleteMyToilet);
// router.use(authentication);
router.post('/', toiletValidation(), validate, createToilet);

export default router;
