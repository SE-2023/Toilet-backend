import express from 'express';
import {getMyList, deleteMyList, addMyList } from '../controllers/myListController';

const router = express.Router();
router.get('/', getMyList);
router.post('/', addMyList);
router.delete('/', deleteMyList);

export default router;
