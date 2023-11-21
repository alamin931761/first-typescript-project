import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World');
};

app.get('/', getAController);

export default app;
