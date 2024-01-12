import Items from '../models/itemModel.js';

export const getItemController = async (req, res) => {
	try {
		const items = await Items.find();
		res.status(200).json({
			isSuccess: true,
			message: 'Item fetch successfully',
			data: items,
		});
	} catch (error) {
		console.log(error);
	}
};
