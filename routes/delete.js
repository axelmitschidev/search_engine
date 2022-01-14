import express from 'express';
import { delete_all_data } from '../controllers/delete.controller.js';
const router = express.Router();

router.post('/delete', delete_all_data);

export default router;