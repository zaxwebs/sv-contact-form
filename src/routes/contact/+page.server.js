import { fail } from '@sveltejs/kit';
import Joi from 'joi';

export const actions = {
	default: async ({ request }) => {
		// TODO
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		const terms = data.get('terms');

		// Define Joi schema for validation
		const schema = Joi.object({
			name: Joi.string().required()
				.messages({
					'string.base': 'Name must be a string',
					'any.required': 'Name is required'
				}),
			email: Joi.string().email().required()
				.messages({
					'string.base': 'Email must be a string',
					'string.email': 'Email must be a valid email address',
					'any.required': 'Email is required'
				}),
			message: Joi.string().required()
				.messages({
					'string.base': 'Message must be a string',
					'any.required': 'Message is required'
				}),
			terms: Joi.boolean().valid(true).required()
				.messages({
					'boolean.base': 'Terms must be a boolean',
					'any.only': 'Terms must be true',
					'any.required': 'Terms must be accepted'
				})
		});


		console.log(name, email, message, terms);

		const validationResult = schema.validate(data);

		// Check for validation errors
		if (validationResult.error) {
			console.log(validationResult.error.details)
			return fail(400, { name, email, message, error: validationResult.error.details[0].message });
		}

		return { success: true };
	}
};