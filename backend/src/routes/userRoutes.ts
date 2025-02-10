import express from 'express';
import { getAllUsers, getSingleUser, createUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);

export default router;