import express from 'express';
import { updateUser, deleteUser } from '../controllers/userController';
import { signUpValidation, validate } from '../middleware/vaildator';

const router = express.Router();

router.put('/:uid', signUpValidation(), validate, updateUser);
router.delete('/', deleteUser);

export default router;
