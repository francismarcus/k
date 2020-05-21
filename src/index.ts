import { app } from './app';
import mongoose from 'mongoose';

import '../env';

const start = async () => {
	if (!process.env.MONGO_ATLAS_URI) {
		throw Error('MONGO ATLAS URI is missing from env');
	}

	try {
		await mongoose.connect(process.env.MONGO_ATLAS_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});

		console.log('connected to MongoDB Atlas');
	} catch (error) {
		console.error(error);
	}

	const port = process.env.PORT || 8000;
	app.listen(port, () => console.log(`Server is running on port: ${port}`));
};

start();
