<script>
	// @ts-nocheck
	export let data;
</script>

<div class="container mt-5 mb-5">
	<h1>Blog Detail</h1>
	{#if data.postDetail}
		<div class="mt-4 p-5 bg-primary text-white rounded">
			<h2>{data.postDetail.id}: {data.postDetail.title}</h2>
			<p>
				{data.postDetail.body}
			</p>
		</div>
	{/if}
</div>
