<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { postMethodFormData } from '$lib/utils.js';

	async function logout() {
		let formData = new URLSearchParams();
		const cookieRes = await postMethodFormData(`/logout`, formData);
		if (cookieRes.type === 'success') {
			//goto('/');
			window.location.reload();
		}
	}
</script>

<header class="p-3 bg-dark text-white">
	<div class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
				<img src="/xmas-tree-svgrepo-com.svg" alt="Logo" height="40" />
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/" class="nav-link px-2 text-white">Home</a></li>
				<li><a href="/about" class="nav-link px-2 text-white">About</a></li>
				<li><a href="/blog" class="nav-link px-2 text-white">Blog</a></li>
			</ul>

			<div class="text-end">
				{#if !$page.data.userSession}
					<a href="/sign-in" class="btn btn-outline-light me-2">Login</a>
				{:else}
					<a href="/user/dashboard" class="btn btn-warning">Dashboard</a>
					<button on:click={logout} class="btn btn-danger">Sign out</button>
				{/if}
				<!-- <a href="/sign-up" class="btn btn-warning">Sign-up</a> -->
			</div>
		</div>
	</div>
</header>
