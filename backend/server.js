import 'dotenv/config';
import './database/conn.js';
import express from 'express';
import { DAOModel } from './database/models/DAOSchema.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// middlewares
const preventUnauthorizeAccess = async (req, res, next) => {
	const { authorized_access_token } = req.headers;
	// console.log('authorized_access_token: ', authorized_access_token);
	if (authorized_access_token == process.env.AUTHORIZED_ACCESS_TOKEN) {
		next();
	} else {
		res.send('You are not authorized to access the resources');
	}
};

app.use(preventUnauthorizeAccess);

app.get('/', (req, res) => {
	console.log(req.headers);
	res.send('hello world');
});

app.get('/dao', async (req, res) => {
	try {
		const result = await DAOModel.find();
		res.send(result);
	} catch (err) {
		res.sendStatus(400).send(`error occurred: ${err}`);
	}
});

app.post('/dao', async (req, res) => {
	try {
		const {
			dao_name,
			dao_short_desc,
			dao_desc,
			dao_logo,
			dao_chain,
			dao_creator_address,
		} = req.body;

		const newDao = new DAOModel({
			dao_name,
			dao_short_desc,
			dao_desc,
			dao_logo,
			dao_chain,
			dao_creator_address,
		});

		const savedDAO = await newDao.save();
		res.send(savedDAO);
	} catch (e) {
		res.send(e);
	}
});

app.get('/dao/:id', async (req, res) => {
	try {
		const result = await DAOModel.findOne({ _id: req.params.id });
		res.send(result);
	} catch (err) {
		res.sendStatus(400).send(`error occurred: ${err}`);
	}
});

app.listen(PORT, () => {
	console.log(`App started on http://localhost:${PORT}`);
});
