import { Request, Response } from 'express';
import fs from 'fs/promises';

import { HttpError } from "../../helpers";
import { todosPath } from 'constants/todos';
import { ITodoItem } from 'types';

export const getOneTodoById = async (req: Request, res: Response) => {
	const { todoId } = req.params;
	const buffer = await fs.readFile(todosPath)
	const todos = JSON.parse(buffer.toString());

	const todo = todos.find(({ id }: ITodoItem) => {
		return id === todoId
	})

	if (!todo) {
		throw HttpError(404);
	}
	res.json(todo)
}