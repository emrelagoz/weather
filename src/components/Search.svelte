<script>
	let searchTerm = '';

	function handleSearch() {
		searchTerm;
	}
</script>

<div>
	<input type="text" bind:value={searchTerm} placeholder="Ara..." />
	<button on:click={handleSearch}>Ara</button>
</div>

