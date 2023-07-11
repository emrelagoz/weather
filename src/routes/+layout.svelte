<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<Header />

<slot />

<Footer />

<style>
	:global(body) {
		background-color: rgb(55, 52, 52);
		margin: 0;
		padding: 0;
	}
</style>
