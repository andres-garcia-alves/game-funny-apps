import { buildPokemonArray, getPokemonNames, getPokemonOptions } from "@/helpers/getPokemonOptions";

describe("helpers/getPokemonOptions.js", () => {

    test("debe regresar array de numeros en buildPokemonArray()", () => {
        const pokemons = buildPokemonArray();

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test("debe retornar un arreglo de 4 elementos en getPokemonNames()", async () => {
        const expectedPokemonNames = [
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' }
        ]

        const returnedPokemonNames = await getPokemonNames([1, 2, 3, 4])

        expect(returnedPokemonNames).toEqual(expectedPokemonNames)
    })

    test("debe retornarse un arreglo mezclado en getPokemonOptions()", async () => {
        const pokemonOptions = await getPokemonOptions()

        expect(pokemonOptions.length).toBe(4)
        expect(pokemonOptions).toEqual([
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) }
        ])
    })
})