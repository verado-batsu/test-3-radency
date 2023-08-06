import path from 'path';
import { dirname } from 'dirname';

export const categoriesList = ["Task", "Random Thought", "Idea", "Quote"];
export const categoriesKeyList = ["task", "thought", "idea", "quote"];

export const todosPath = path.join(dirname, 'db', 'todos.json');
export const archiveTodosPath = path.join(dirname, 'db', 'archiveTodos.json');