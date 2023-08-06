import { Request, Response } from 'express';
import fs from 'fs/promises';

import { HttpError } from "../../helpers";
import { ITodoItem } from '../../types'
import { archiveTodosPath, todosPath } from 'constants/todos';

export const unarchiveTodoById = async (req: Request, res: Response) => {
	const { todoId } = req.params;
	const buffer = await fs.readFile(todosPath)
	const archiveBuffer = await fs.readFile(archiveTodosPath)

	const todos = JSON.parse(buffer.toString());
	const archiveTodos = JSON.parse(archiveBuffer.toString());

	const todoIndex = archiveTodos.findIndex((todo: ITodoItem) => todo.id === todoId)

	if (todoIndex === -1) {
		throw HttpError(404);
	}

	const [result] = archiveTodos.splice(todoIndex, 1);

	todos.push(result)

	await fs.writeFile(todosPath, JSON.stringify(todos, null, 4));
	await fs.writeFile(archiveTodosPath, JSON.stringify(archiveTodos, null, 4));

	res.json(result);
}