import express from 'express';
import { updateUser, deleteUser } from '../controllers/userController';
import { updateProfileValidation, validate } from '../middleware/vaildator';

const router = express.Router();

router.put('/:uid', updateProfileValidation(), validate, updateUser);
router.delete('/', deleteUser);

export default router;
