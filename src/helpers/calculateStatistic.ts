import {  ITodoItem } from "../types";
import { categoriesList } from "constants/todos";

interface IStatistic {
	task: number,
	thought: number,
	idea: number,
	quote: number,
	[x: string]: number,
}


export function calculateStatistic(todos: ITodoItem[]): IStatistic {
	const statistic = {
		task: 0,
		thought: 0,
		idea: 0,
		quote: 0,
	}

	todos.forEach(todo => {
		switch (todo.category) {
			case categoriesList[0]:
				statistic.task += 1;
			break;
			case categoriesList[1]:
				statistic.thought += 1;
				break;
			case categoriesList[2]:
				statistic.idea += 1;
				break;
			case categoriesList[3]:
				statistic.quote += 1;
				break;
			default: return;
		}
	})
	
	return statistic;
}