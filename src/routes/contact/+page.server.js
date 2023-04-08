import { fail } from '@sveltejs/kit';
import { z } from 'zod';

export const actions = {
	default: async ({ request }) => {
		// TODO
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		const formSchema = z.object({
			name: z.string({ required_error: "Name is required" }).min(1, { message: "Name is required" }),
			email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email" }),
			message: z.string({ required_error: "Message is required" }).min(1, { message: "Message is required" }),
		});

		try {
			formSchema.parse({ name, email, message });
		} catch (e) {
			console.log(e.flatten())
			return fail(400, { ...e.flatten() })
		}

		return { success: true };
	}
};