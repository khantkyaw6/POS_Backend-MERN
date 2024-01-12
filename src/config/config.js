import mongoose from 'mongoose';

const connectDb = async () => {
	try {
		const con = await mongoose.connect(process.env.DB_URL);
		console.log('Mongodb Connected');
	} catch (error) {
		console.log(`Error: ${error.message}`.bgRed);
		process.exit(1);
	}
};

export default connectDb;
