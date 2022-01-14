import express from 'express';
const router = express.Router();

import { get_search_page, search_word } from '../controllers/search.controller.js';

router.get('/search', get_search_page );
router.post('/search', search_word );

export default router;