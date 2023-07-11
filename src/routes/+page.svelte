<script lang="ts">
	import type { WeatherData } from '$lib/weatherdata';
	import Citycard from '../components/Citycard.svelte';

	export let data: { c: WeatherData[] };

	console.log();
</script>

<div class="container">
	{#each data.c as city, i}
		<Citycard {city} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		justify-content: space-evenly;
		margin: 0 auto;
		flex-wrap: wrap;
		gap: 10px;
		width: 60%;
	}
</style>
