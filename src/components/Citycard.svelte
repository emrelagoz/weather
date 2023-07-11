<script lang="ts">
	import { KelvinToCelcius } from '$lib/utils';
	import type { WeatherData } from '$lib/weatherdata';

	export let city: WeatherData;
	console.log(city);
</script>

<a href="/{city.id}">
	<div class="card">
		<h1>{city.name}</h1>
		<h2>{KelvinToCelcius(city.main.temp)} &#8451;</h2>
		<img src="/{city.weather[0].main}.svg" alt="emre" />
		<h2>{city.weather[0].main}</h2>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid gray;
		width: 250px;
		height: 250px;
		border-radius: 25%;
		background-color: bisque;
		margin: 20px auto;
	}
</style>
