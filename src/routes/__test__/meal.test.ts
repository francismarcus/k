import request from 'supertest';
import { app } from '../../app';
import { Meal } from '../../models/Meal';

let meal: any;
beforeEach(async () => {
	meal = await Meal.create({
		date: new Date(),
		label: 'Test meal',
		calories: 900,
		userId: 'testuser'
	});
});

it('recieves 200 from /', async () => {
	await request(app)
		.get('/api/v0/meals')
		.expect(200);
});

it('returns meal by id from /:id', async () => {
	const { body } = await request(app)
		.get(`/api/v0/meals/${meal._id}`)
		.expect(200);

	expect(body.userId).toEqual(meal.userId);
});

it('returns meals by userId from /byUser/:userId', async () => {
	const { body } = await request(app)
		.get(`/api/v0/meals/byUser/${meal.userId}`)
		.expect(200);

	expect(body).toHaveLength(1);
});

it('returns meals by userId % date from /byUserAndDate/:userId/:date', async () => {
	const { body } = await request(app)
		.get(`/api/v0/meals/byUserAndDate/${meal.userId}/${meal.date}`)
		.expect(200);

	expect(body).toHaveLength(1);
});

it('successfully creates a new meal from /new', async () => {
	const newMeal = {
		date: new Date(),
		label: 'New meal',
		calories: 1500,
		userId: 'testuser'
	};
	const { body } = await request(app)
		.post('/api/v0/meals/new')
		.send(newMeal)
		.expect(200);

	expect(body.label).toBe(newMeal.label);
});

it('updates meal by id from /update/:id', async () => {
	const { body } = await request(app)
		.post(`/api/v0/meals/update/${meal._id}`)
		.send({
			label: 'Updated label'
		})
		.expect(200);

	expect(body.label).toBe('Updated label');
});

it('deletes meal by id from /:id', async () => {
	await request(app)
		.delete(`/api/v0/meals/${meal._id}`)
		.expect(200, {
			message: 'Successfully deleted'
		});
});
