"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controllers_1 = require("../../controllers/todo-controllers");
const { addNewTodo, deleteTodoById, updateTodoById, getOneTodoById, getAllTodos, getTodoStat } = todo_controllers_1.todoControllers;
const todos_1 = require("../../schemas/todos");
const { validateBody } = require('../../decorators');
const router = express_1.default.Router();
router.post('/', validateBody(todos_1.todoAddSchema), addNewTodo);
router.delete('/:todoId', deleteTodoById);
router.patch('/:todoId', validateBody(todos_1.todoAddSchema), updateTodoById);
router.get('/:todoId', getOneTodoById);
router.get('/', getAllTodos);
router.get('/stats', getTodoStat);
exports.default = router;
//# sourceMappingURL=todos-routes.js.map