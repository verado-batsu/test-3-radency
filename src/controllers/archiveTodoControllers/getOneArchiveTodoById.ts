import { Request, Response } from 'express';
import fs from 'fs/promises';

import { HttpError } from "../../helpers";
import { archiveTodosPath } from 'constants/todos';
import { ITodoItem } from 'types';

export const getOneArchiveTodoById = async (req: Request, res: Response) => {
	const { todoId } = req.params;
	const archiveBuffer = await fs.readFile(archiveTodosPath)
	const archiveTodos = JSON.parse(archiveBuffer.toString());

	const todo = archiveTodos.find(({ id }: ITodoItem) => {
		return id === todoId
	})

	if (!todo) {
		throw HttpError(404);
	}
	res.json(todo)
}