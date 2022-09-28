import Joi from 'joi';
const orderSchema = Joi.object({
	productsName: Joi.string().min(5).max(32).required().messages({
		'string.min': 'name must be at least 5 characters',
		'string.max': "name can't be longer than 32 characters",
		'string.empty': "name can't be empty",
		'any.required': 'name is required',
	}),
	userName: Joi.string().min(5).max(32).required().messages({
		'string.min': 'name must be at least 5 characters',
		'string.max': "name can't be longer than 32 characters",
		'string.empty': "name can't be empty",
		'any.required': 'name is required',
	}),
	productsQuantity: Joi.number().greater(0).required().messages({
		'number.greater': 'quantity must be greater than 0',
		'number.empty': "quantity can't be empty",
		'any.required': 'quantity is required',
	})
});
export default orderSchema;