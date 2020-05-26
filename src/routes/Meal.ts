import Express, { Request, Response, NextFunction } from 'express';
import { Meal } from '../models/Meal';

const router: Express.Router = Express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	return res.send('Hello from meal router');
});

router.post('/new', async (req: Request, res: Response, next: NextFunction) => {
	const { userId, ...rest } = req.body;

	try {
		const meal = await Meal.create({
			date: '2020-05-26',
			userId,
			...rest
		});

		res.send({ meal });
	} catch (err) {
		res.status(422).send(err.message);
	}
});

router.get('/:userId/:date', async (req: Request, res: Response, next: NextFunction) => {
	const { userId, date } = req.params;

	try {
		const meals = await Meal.find({
			date,
			userId
		});
		res.send({ meals });
	} catch (err) {
		res.status(422).send(err.message);
	}
});

router.post('/update/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		await Meal.findByIdAndUpdate(
			req.params.id,
			{
				...req.body
			},
			(err, result) => {
				if (err) res.status(422).send(err.message);
				else {
					res.send(result);
				}
			}
		);
	} catch (err) {
		res.status(422).send(err.message);
	}
});

router.post('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const meal = await Meal.findById(req.params.id);
		res.send({ meal });
	} catch (err) {
		res.status(422).send(err.message);
	}
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		await Meal.findByIdAndDelete(req.params.id);
		res.send({ message: 'Successfully deleted' });
	} catch (err) {
		res.status(422).send(err.message);
	}
});

export const MealRouter = router;
