import { Request, Response } from 'express';
import fs from 'fs/promises';

import { archiveTodosPath, todosPath } from 'constants/todos';
import { ITodoItem } from 'types';
import { HttpError } from 'helpers';

export const archiveNewTodo = async (req: Request, res: Response) => {
	const { todoId } = req.params;
	const buffer = await fs.readFile(todosPath)
	const archiveBuffer = await fs.readFile(archiveTodosPath)

	const todos = JSON.parse(buffer.toString());
	const archiveTodos = JSON.parse(archiveBuffer.toString());

	const todoIndex = todos.findIndex((todo: ITodoItem) => todo.id === todoId)

	if (todoIndex === -1) {
		throw HttpError(404);
	}

	const [result] = todos.splice(todoIndex, 1);

	archiveTodos.push(result)
	await fs.writeFile(todosPath, JSON.stringify(todos, null, 4));
	await fs.writeFile(archiveTodosPath, JSON.stringify(archiveTodos, null, 4));
	res.status(201).json(result);
}