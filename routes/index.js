import express from 'express';
const router = express.Router();

import indexing_route from './indexing.js';
import search_route from './search.js';
import delete_route from './delete.js';

router.use(indexing_route);
router.use(search_route);
router.use(delete_route);

export default router;