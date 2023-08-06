import { Request, Response } from 'express';
import fs from 'fs/promises';
import { nanoid } from 'nanoid';

import { todosPath } from 'constants/todos';
import { findDateInText } from 'helpers';

export const addNewTodo = async (req: Request, res: Response) => {
	const buffer = await fs.readFile(todosPath)
	const todos = JSON.parse(buffer.toString());

	const date = new Date()
	const formatDate = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
	
	const dates = findDateInText(req.body.content)

	const newTodo = {
		id: nanoid(),
		created: formatDate,
		dates: dates,
		...req.body
	}

	todos.push(newTodo)
	await fs.writeFile(todosPath, JSON.stringify(todos, null, 4));
	res.status(201).json(newTodo);
}