import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
import cors from 'cors';
import 'dotenv/config';

import todosRouter from './routes/api/todos-routes';
import archiveTodosRouter from './routes/api/archive-routes';

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/api/notes', archiveTodosRouter, todosRouter)

app.use((_: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' })
})


const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message })
};

app.use(errorHandler)

const {PORT = 3000} = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})