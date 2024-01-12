import express from 'express';
import { getItemController } from '../../../controllers/itemController.js';

const router = express.Router();

router.route('/').get(getItemController);
// router.get('/', (req, res) => {
// 	res.send('Get items');
// });

export default router;
