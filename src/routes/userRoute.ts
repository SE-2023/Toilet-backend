import express from 'express';
import { updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.post('/updateUser', updateUser);
router.post('/deleteUser', deleteUser);

export default router;
