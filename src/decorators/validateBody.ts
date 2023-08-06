import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import { HttpError } from "../helpers";

export const validateBody = (schema: Schema) => {
	const func = (req: Request, _: Response, next: NextFunction) => {
		if (!req.body || Object.keys(req.body).length === 0) {
			next(HttpError(400, "missing fields"));
		}
		const { error } = schema.validate(req.body);
		if (error) {
			next(HttpError(400, error.message));
		}
		next(error);
	}
	return func;
}