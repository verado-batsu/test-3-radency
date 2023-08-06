"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoControllers = void 0;
const decorators_1 = require("../../decorators");
const getAllTodos_1 = require("./getAllTodos");
const getOneTodoById_1 = require("./getOneTodoById");
const addNewTodo_1 = require("./addNewTodo");
const deleteTodoById_1 = require("./deleteTodoById");
const updateTodoById_1 = require("./updateTodoById");
const getTodoStat_1 = require("./getTodoStat");
exports.todoControllers = {
    addNewTodo: (0, decorators_1.ctrlWrapper)(addNewTodo_1.addNewTodo),
    deleteTodoById: (0, decorators_1.ctrlWrapper)(deleteTodoById_1.deleteTodoById),
    updateTodoById: (0, decorators_1.ctrlWrapper)(updateTodoById_1.updateTodoById),
    getOneTodoById: (0, decorators_1.ctrlWrapper)(getOneTodoById_1.getOneTodoById),
    getAllTodos: (0, decorators_1.ctrlWrapper)(getAllTodos_1.getAllTodos),
    getTodoStat: (0, decorators_1.ctrlWrapper)(getTodoStat_1.getTodoStat)
};
//# sourceMappingURL=index.js.map