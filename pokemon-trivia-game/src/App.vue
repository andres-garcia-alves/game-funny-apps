<template>
	<div>
		<PokemonPage />
	</div>
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'

export default {
	name: 'App',
	components: {
		PokemonPage
	}
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	margin-top: 30px;
	text-align: center;
}
</style>
