import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello, TypeScript with Express!</h1>');
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
