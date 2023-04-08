<script>
	export let form;
</script>

<div class="container py-5">
	<h1>Get in touch</h1>
	<p>We look forward to hearing from you.</p>
	{#if form?.success}
		<div class="alert alert-success" role="alert">Great! We'll get back soon.</div>
	{/if}
	{#if form?.error}
		<div class="alert alert-danger" role="alert">{form?.error}</div>
	{/if}
	<form method="POST" action="/contact">
		<div class="mb-3">
			<label for="name" class="form-label">Name</label>
			<input id="name" type="text" name="name" class="form-control" value={form?.name ?? ''} />
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input
				type="email"
				name="email"
				class="form-control"
				id="email"
				aria-describedby="emailHelp"
			/>
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="message" class="form-label">Message</label>
			<textarea name="message" class="form-control" id="message" rows="3" />
		</div>
		<div class="mb-3 form-check">
			<input type="checkbox" class="form-check-input" id="terms" name="terms" />
			<label class="form-check-label" for="terms">
				I agree with the terms and conditions and privacy policy.
			</label>
		</div>
		<button type="submit" class="btn btn-primary">Send Message</button>
	</form>
</div>
