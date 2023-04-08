export const actions = {
	default: async ({ request }) => {
		// TODO
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		const terms = data.get('terms');

		console.log(name, email, message);

		return { success: true };
	}
};