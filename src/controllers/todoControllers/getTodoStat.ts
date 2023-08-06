import { Request, Response } from 'express';
import fs from 'fs/promises';

import { archiveTodosPath, categoriesKeyList, todosPath } from 'constants/todos';
import { calculateStatistic } from 'helpers/calculateStatistic';

export const getTodoStat = async (_: Request, res: Response) => {
	const buffer = await fs.readFile(todosPath)
	const archiveBuffer = await fs.readFile(archiveTodosPath)

	const todos = JSON.parse(buffer.toString());
	const archiveTodos = JSON.parse(archiveBuffer.toString());

	const activeStat = calculateStatistic(todos);
	const archiveStat = calculateStatistic(archiveTodos);

	const statistic = categoriesKeyList.map((category: string) => {
		return {
			category,
			active: activeStat[category],
			archive: archiveStat[category]
		}
	})

	res.json(statistic)
}