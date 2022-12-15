import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose
	.connect('mongodb://localhost:27017/drift_dao')
	.then(() => {
		console.log(`connected to mongodb`);
	})
	.catch((err) => {
		console.log(err);
	});
