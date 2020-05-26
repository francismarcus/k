import Express from 'express';
import { MealRouter } from './Meal';

const router: Express.Router = Express.Router();
router.use('/meals', MealRouter);

export const Router = router;
