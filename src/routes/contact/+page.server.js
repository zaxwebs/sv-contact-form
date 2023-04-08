import { fail } from '@sveltejs/kit';
import { z } from 'zod';

export const actions = {
	default: async ({ request }) => {
		// TODO
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		const terms = data.get('terms');

		const formSchema = z.object({
			name: z.string().min(2).max(50),
			email: z.string().email(),
			message: z.string().min(10).max(500),
			terms: z.boolean().refine(value => value === true, {
				message: "Terms must be accepted"
			})
		});

		// Validate form data against the schema
		const validateForm = (formData) => {
			try {
				formSchema.parse(formData);
				return { isValid: true, errors: null };
			} catch (error) {
				return { isValid: false, errors: error.message };
			}
		};

		const validationResult = validateForm({ name, email, message, terms });

		if (!validationResult.isValid) {
			return fail(400, { errors: validationResult.errors })
		} else {
			console.error("Form data is invalid:", validationResult.error);
		}

		return { success: true };
	}
};