<script>
	export let form;
</script>

<div class="container py-5">
	<h1>Get in touch</h1>
	<p>We look forward to hearing from you.</p>
	{#if form?.success}
		<div class="alert alert-success" role="alert">Great! We'll get back soon.</div>
	{/if}
	<form method="POST" action="/contact">
		<div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input
				id="name"
				type="text"
				name="name"
				class="form-control"
				class:is-invalid={form?.fieldErrors?.name}
				value={form?.name ?? ''}
			/>
			{#if form?.fieldErrors?.name}
				<div class="invalid-feedback">{form?.fieldErrors?.name[0]}</div>
			{/if}
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input
				type="email"
				name="email"
				class="form-control"
				id="email"
				aria-describedby="emailHelp"
				value={form?.email ?? ''}
				class:is-invalid={form?.fieldErrors?.email}
			/>
			{#if form?.fieldErrors?.email}
				<div class="invalid-feedback">{form?.fieldErrors?.email[0]}</div>
			{/if}
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="message" class="form-label">Message</label>
			<textarea
				name="message"
				class="form-control"
				id="message"
				rows="3"
				class:is-invalid={form?.fieldErrors?.message}>{form?.message ?? ''}</textarea
			>
			{#if form?.fieldErrors?.message}
				<div class="invalid-feedback">{form?.fieldErrors?.message[0]}</div>
			{/if}
		</div>
		<button type="submit" class="btn btn-primary">Send Message</button>
	</form>
</div>
