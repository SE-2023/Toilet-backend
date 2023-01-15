import express from 'express';
import { createLocation, getAllLocation } from '../controllers/locationController';

const router = express.Router();
router.post('/', createLocation);
router.get('/', getAllLocation);

export default router;
