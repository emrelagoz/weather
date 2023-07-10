<script lang="ts">
	import type { WeatherData } from "$lib/weatherdata";

export let data:{data:WeatherData}
console.log(data)


</script>

<div class="container">
<h1 style= "color:brown">{data.data.name.toUpperCase()}</h1>   
<h3>Temperature = {(data.data.main.temp-273.15).toFixed()} &#8451;</h3>
<img src="/{data.data.weather[0].main}.svg" alt="emre"/>
<h3>{(data.data.weather[0].description).toUpperCase()}</h3>
<h3>Humidity = %{data.data.main.humidity}</h3>
<h3>Felt Temperature = {(data.data.main.feels_like-273.15).toFixed()} &#8451;</h3>
<h3>Temp Min = {(data.data.main.temp_min-273.15).toFixed()} &#8451;</h3>
<h3>Temp Max = {(data.data.main.temp_max-273.15).toFixed()} &#8451;</h3>
<h3>Wind Speed = {data.data.wind.speed} km</h3>
<h3>Wind Deg = {(data.data.wind.deg-273.15).toFixed()} &#8451;</h3>
</div>

<style >

.container{
    border:2px solid black;
    border-radius: 8px;
    width:500px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: rgb(209, 203, 195);
    margin-bottom: auto;
    text-shadow: 2px 4px 10px #453e3e;
    margin: 140px auto;
}

</style>
