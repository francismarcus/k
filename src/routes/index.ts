import Express from 'express';
import { DailyRouter } from './Daily';

const router: Express.Router = Express.Router();
router.use('daily', DailyRouter);

export const Router = router;
