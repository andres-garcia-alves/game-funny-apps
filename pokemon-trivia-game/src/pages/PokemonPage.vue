<template>
    <div>
        <div v-if="pokemon">
            <h1>¿Quién es este pokemón?</h1>

            <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
            <PokemonOptions :pokemons="pokemonArray" @selection="checkAnswer($event)" />

            <template v-if="showAnswer">
                <h2 class="fade-in">{{ message }}</h2>
                <button @click="newGame">Nuevo juego</button>
            </template>
        </div>       
        <h2 v-else>espere por favor...</h2>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArray: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArray = await getPokemonOptions()
            const idx = Math.floor(Math.random() * 4)

            this.pokemon = this.pokemonArray[idx]
        },
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true
            this.message = (selectedId === this.pokemon.id) ?
                `Correcto, ${ this.pokemon.name }.` :
                `Ups, en realidad es: ${ this.pokemon.name }.`
        },
        async newGame() {
            this.pokemonArray = []
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''

            await this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style scoped>
button {
    background-color: black;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 5px;
    width: 250px;
}
</style>
