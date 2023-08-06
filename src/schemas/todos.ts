import Joi from 'joi';
import { categoriesList } from 'constants/todos';

export const todoAddSchema = Joi.object({
	name: Joi.string().required().messages({
		'any.required': `missing required name field`
    }),
	category: Joi.string().valid(...categoriesList).required().messages({
		'any.required': `missing required category field`
    }),
	content: Joi.string().required().messages({
		'any.required': `missing required content field`
	}),
})

export const editAddSchema = Joi.object({
	name: Joi.string(),
	category: Joi.string().valid(...categoriesList),
	content: Joi.string(),
})

