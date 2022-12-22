<script>
	// @ts-nocheck
	export let data;
</script>

<div class="container">
	<h1 class="mt-5">Blog Page</h1>
	<div class="list-group mb-5 mt-3">
		{#if data.postData}
			{#each data.postData as post}
				<a href="/blog/{post.id}" class="list-group-item list-group-item-action">{post.title}</a>
			{/each}
		{/if}
	</div>
</div>
