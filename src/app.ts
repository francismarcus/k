import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { Router } from './routes';

const app = express();
app.use(json());
app.use(cors());

app.use('/api/v0', Router);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('Boilerplate up and running');
});

export { app };
