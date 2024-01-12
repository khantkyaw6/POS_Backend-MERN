import mongoose from 'mongoose';

const { Schema } = mongoose;

const itemSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamp: true }
);

const Items = mongoose.model('Items', itemSchema);

export default Items;
