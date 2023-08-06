import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
import cors from 'cors';

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

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})