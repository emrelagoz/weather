<script>
	import Search from './Search.svelte';
</script>

<div class="header">
	<a href="/">
		<img src="/Weather.svg" alt="emre" />
	</a>
	<Search />
	<a href="/contact" class="support">
		<h1 class="support">Support</h1>
	</a>
</div>

<style>
	.header {
		background-color: rgb(255, 255, 255);
		display: flex;
		justify-content: space-between;
		padding: 0 25px;
		align-items: center;
	}

	.support {
		color: rgb(17, 17, 17);
		text-decoration: none;
	}
</style>
