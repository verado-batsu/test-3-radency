import express, { Router } from 'express';
import { archiveTodoControllers } from '../../controllers/archiveTodoControllers';

const {
	getAllArchiveTodos,
	archiveNewTodo,
	unarchiveTodoById,
	getOneArchiveTodoById
} = archiveTodoControllers

const router: Router = express.Router()

router.post('/archive/:todoId', archiveNewTodo)

router.delete('/archive/:todoId', unarchiveTodoById)

router.get('/archive/:todoId', getOneArchiveTodoById)

router.get('/archive', getAllArchiveTodos)

export default router;