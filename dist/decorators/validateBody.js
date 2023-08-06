"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const helpers_1 = require("../helpers");
const validateBody = schema => {
    const func = (req, res, next) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            next((0, helpers_1.HttpError)(400, "missing fields"));
        }
        const { error } = schema.validate(req.body);
        if (error) {
            next((0, helpers_1.HttpError)(400, error.message));
        }
        next(error);
    };
    return func;
};
exports.validateBody = validateBody;
//# sourceMappingURL=validateBody.js.map