import Express, { Request, Response, NextFunction } from 'express';

const router: Express.Router = Express.Router();

router.post('/create', (req: Request, res: Response, next: NextFunction) => {});

export const DailyRouter = router;
