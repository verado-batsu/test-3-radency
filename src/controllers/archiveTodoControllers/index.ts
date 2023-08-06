import {
	ctrlWrapper
} from '../../decorators';

import { getAllArchiveTodos } from "./getAllArchiveTodos";
import { archiveNewTodo } from "./archiveNewTodo";
import { unarchiveTodoById } from "./unarchiveTodoById";
import { getOneArchiveTodoById } from './getOneArchiveTodoById';


export const archiveTodoControllers = {
	archiveNewTodo: ctrlWrapper(archiveNewTodo),
	unarchiveTodoById: ctrlWrapper(unarchiveTodoById),
	getAllArchiveTodos: ctrlWrapper(getAllArchiveTodos),
	getOneArchiveTodoById: ctrlWrapper(getOneArchiveTodoById)
}