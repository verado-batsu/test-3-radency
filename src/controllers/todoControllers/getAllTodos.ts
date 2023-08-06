import { Request, Response } from 'express';
import fs from 'fs/promises';

import { todosPath } from 'constants/todos';

export const getAllTodos = async (_: Request, res: Response) => {
	const buffer = await fs.readFile(todosPath)
	const todos = JSON.parse(buffer.toString());
	res.json(todos);
}