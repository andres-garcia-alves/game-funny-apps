<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
            {{ pokemon.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            requiered: true
        }
    }
}
</script>

<style scoped>
.options-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 15px;
    padding: 5px;
    width: 250px;
}
li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>