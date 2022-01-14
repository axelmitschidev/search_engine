import express from 'express';
const router = express.Router();

import { get_indexing_page, post_new_site } from '../controllers/indexing.controller.js';

router.get('/', get_indexing_page );
router.post('/', post_new_site );

export default router;