import { Request, Response } from 'express';
import fs from 'fs/promises';

import { HttpError } from "../../helpers";
import { ITodoItem } from '../../types'
import { todosPath } from 'constants/todos';

export const deleteTodoById = async (req: Request, res: Response) => {
	const { todoId } = req.params;
	const buffer = await fs.readFile(todosPath)
	const todos = JSON.parse(buffer.toString());

	const todoIndex = todos.findIndex((todo: ITodoItem) => todo.id === todoId)

	if (todoIndex === -1) {
		throw HttpError(404);
	}

	const [result] = todos.splice(todoIndex, 1);

	await fs.writeFile(todosPath, JSON.stringify(todos, null, 4));

	res.json(result);
}