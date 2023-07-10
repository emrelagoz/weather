<script>
	let name = '';
	let surname = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		console.log('Ad: ', name);
		console.log('E-posta: ', email);
		console.log('Mesaj: ', message);

		name = '';
		email = '';
		message = '';
		surname = '';
	}
</script>

<div>
	<h1>İletişim Sayfası</h1>

	<form on:submit|preventDefault={handleSubmit} class="form">
		<label>
			Ad:
			<input type="text" bind:value={name} required />
		</label>
		<label>
			Soyad:
			<input type="text" bind:value={surname} required />
		</label>
		<label>
			E-posta:
			<input type="email" bind:value={email} required />
		</label>

		<label>
			Mesaj:
			<textarea bind:value={message} required />
		</label>

		<button type="submit">Gönder</button>
	</form>
</div>

<style>
	div {
		width: 600px;
		height: 600px;
		background-color: white;
		margin: 63px auto;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		align-items: center;
	}
	.form {
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		align-items: center;
	}
	label {
		padding: 10px;
	}
</style>
