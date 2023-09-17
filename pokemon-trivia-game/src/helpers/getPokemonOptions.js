import pokemonAPI from '@/api/pokemonAPI.js'

export const buildPokemonArray = () => {

    const pokemonsArray = Array.from( Array(650) )
    return pokemonsArray.map( (_, index) => index + 1 )
}

export const getPokemonNames = async ( [a, b, c, d] = [] ) => {

    const promises = [
        pokemonAPI.get(`/${ a }`),
        pokemonAPI.get(`/${ b }`),
        pokemonAPI.get(`/${ c }`),
        pokemonAPI.get(`/${ d }`)
    ]

    // llamada a la API
    const [ p1, p2, p3, p4 ] = await Promise.all(promises)

    return [
        { id: p1.data.id, name: p1.data.name },
        { id: p2.data.id, name: p2.data.name },
        { id: p3.data.id, name: p3.data.name },
        { id: p4.data.id, name: p4.data.name }
    ]
}

export const getPokemonOptions = async () => {

    const pokemons = buildPokemonArray().sort( () => Math.random() - 0.5 )
    return await getPokemonNames(pokemons.splice(0, 4))
}

export default getPokemonOptions
