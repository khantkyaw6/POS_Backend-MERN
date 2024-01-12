import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './src/config/config.js';
import Items from './src/models/itemModel.js';
import items from './src/utils/data.js';

dotenv.config();
connectDb();

const importData = async () => {
	try {
		await Items.deleteMany();
		const itemsData = await Items.insertMany(items);
		console.log('All Items added');
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

importData();
