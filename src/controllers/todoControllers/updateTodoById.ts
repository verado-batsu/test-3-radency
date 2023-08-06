import { Request, Response } from 'express';
import fs from 'fs/promises';

import { HttpError, findDateInText } from "../../helpers";
import { todosPath } from 'constants/todos';
import { ITodoItem } from 'types';

export const updateTodoById = async (req: Request, res: Response) => {
	const { todoId } = req.params;

	const buffer = await fs.readFile(todosPath)
	const todos = JSON.parse(buffer.toString());

	const todoIndex = todos.findIndex((todo: ITodoItem) => todo.id === todoId)

	if (todoIndex === -1) {
		throw HttpError(404);
	}

	let dates = null;

	if (req.body.content) {
		dates = findDateInText(req.body.content)
	}
	

	const editTodo = {
		...req.body,
		dates: dates ? dates : '',
	}

	let editedTodo = null;

	const newTodos = todos.map((todo: ITodoItem) => {
		if (todo.id === todoId) {
			editedTodo = {
				...todo,
				...editTodo
			}
			return editedTodo
		}
		return todo;
	})

	await fs.writeFile(todosPath, JSON.stringify(newTodos, null, 4));
	
	res.json(editedTodo)
}