import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './src/config/config.js';
import route from './src/routes/index.js';
import pkg from 'colors';

const { bgCyan } = pkg;

//rest object

dotenv.config();

connectDb();

const app = express();
const PORT = process.env.PORT || 8000;
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes
// app.get('/api', (req, res) => {
// 	res.send('Still working');
// });

app.use('/api', route);

app.listen(PORT, () => {
	console.log(`Server is running at Port ${PORT}`.bgCyan);
});
