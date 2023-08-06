import express, { Router } from 'express';
import { todoControllers } from '../../controllers/todoControllers';

const {
	addNewTodo,
	deleteTodoById,
	updateTodoById,
	getOneTodoById,
	getAllTodos,
	getTodoStat
} = todoControllers;

import { editAddSchema, todoAddSchema } from '../../schemas/todos';

import { validateBody } from '../../decorators';

const router: Router = express.Router()

router.get('/stats', getTodoStat)

router.post('/', validateBody(todoAddSchema), addNewTodo)

router.delete('/:todoId', deleteTodoById)

router.patch('/:todoId', validateBody(editAddSchema), updateTodoById)

router.get('/:todoId', getOneTodoById)

router.get('/', getAllTodos)

export default router;