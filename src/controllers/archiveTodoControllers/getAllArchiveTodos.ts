import { Request, Response } from 'express';
import fs from 'fs/promises';

import { archiveTodosPath } from 'constants/todos';

export const getAllArchiveTodos = async (_: Request, res: Response) => {
	const archiveBuffer = await fs.readFile(archiveTodosPath);
	const todos = JSON.parse(archiveBuffer.toString());
	res.json(todos);
}