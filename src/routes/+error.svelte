<script context="module">
	import { page } from '$app/stores';
</script>

<div class="container py-5">
	<h1 class="text-center">{$page.status}</h1>
	<h4 class="text-center">{$page.error?.message}</h4>
</div>
