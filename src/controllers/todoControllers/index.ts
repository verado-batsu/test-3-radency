import {
	ctrlWrapper
} from '../../decorators';

import { getAllTodos } from "./getAllTodos";
import { getOneTodoById } from "./getOneTodoById";
import { addNewTodo } from "./addNewTodo";
import { deleteTodoById } from "./deleteTodoById";
import { updateTodoById } from "./updateTodoById";
import { getTodoStat } from "./getTodoStat";

export const todoControllers = {
	addNewTodo: ctrlWrapper(addNewTodo),
	deleteTodoById: ctrlWrapper(deleteTodoById),
	updateTodoById: ctrlWrapper(updateTodoById),
	getOneTodoById: ctrlWrapper(getOneTodoById),
	getAllTodos: ctrlWrapper(getAllTodos),
	getTodoStat: ctrlWrapper(getTodoStat)
}