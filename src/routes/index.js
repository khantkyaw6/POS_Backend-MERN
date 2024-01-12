import express from 'express';
import itemRoutes from './v1/item/itemRoutes.js';

const router = express.Router();

router.use('/v1/items', itemRoutes);

export default router;
