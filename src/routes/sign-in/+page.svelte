<script>
	// @ts-nocheck
	//import { session } from '$app/stores';
	// import * as cookies from 'cookie';
	import { goto } from '$app/navigation';
	import { postMethod, postMethodFormData } from '$lib/utils.js';
	import loginSchema from '$lib/formValidation/loginForm';
	let submitted = false;
	let errors = {};
	let values = {
		email: 'admin@gmail.com',
		password: 'admin@123'
	};
	let apiErrors = null;
	const handleSubmit = async () => {
		try {
			await loginSchema.validate(values, { abortEarly: false });
			const response = await postMethod(`http://localhost:8000/index/login`, values);
			if (response.statusCode === 'OK') {
				let formData = new URLSearchParams();
				formData.append('tok', response.payload.userDetail.token);

				const cookieRes = await postMethodFormData(`?/setCookie`, formData);
				if (cookieRes.type === 'success') {
					//goto('/');
					window.location.reload();
				}
			} else {
				apiErrors = response.message;
				alert(apiErrors);
			}
			errors = {};
		} catch (err) {
			errors = err.inner.reduce((acc, err) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<main class="form-signin mb-5 mt-5">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-control">
			<label class="label" for="input-bordered">
				<span class="label-text">Email</span>
			</label>
			<input type="text" class="form-control" bind:value={values.email} />
			{#if errors.email}
				<span class="error">{errors.email}</span>
			{/if}
		</div>
		<div class="form-control">
			<label class="label" for="input-bordered">
				<span class="label-text">Password</span>
			</label>
			<input type="password" class="form-control" bind:value={values.password} />
			{#if errors.password}
				<span class="error">{errors.password}</span>
			{/if}
		</div>
		<br />
		<div class="form-control mt-6">
			<button type="submit" class="btn btn-primary" on:click={() => (submitted = true)}
				>Submit</button
			>
		</div>
	</form>
</main>
