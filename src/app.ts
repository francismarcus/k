import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('Boilerplate up and running');
});

export { app };
