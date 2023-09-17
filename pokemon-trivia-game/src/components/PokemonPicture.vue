<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon" :src="imgSrc" class="hidden-pokemon" alt="pokemon">
        <img v-else :src="imgSrc" class="fade-in" alt="pokemon">
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            requiered: true,
            validator: (value) => { return value < 600 ? true : false }
        },
        showPokemon: {
            type: Boolean,
            requiered: true,
            default: false
        }
    },
    data() {
        return {
            id: this.pokemonId
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
.hidden-pokemon {
    filter: brightness(0);
}
img {
    height: 200px;
    /*position: absolute;
    right: 32%;*/
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

/* otra forma de centrar la imagen del pokemon */
/* img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
} */
</style>
