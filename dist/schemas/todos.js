"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoAddSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const todos_1 = require("constants/todos");
exports.todoAddSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        'any.required': `missing required name field`
    }),
    category: joi_1.default.string().valid(...todos_1.categoriesList).required().messages({
        'any.required': `missing required category field`
    }),
    content: joi_1.default.string().required().messages({
        'any.required': `missing required content field`
    }),
});
//# sourceMappingURL=todos.js.map