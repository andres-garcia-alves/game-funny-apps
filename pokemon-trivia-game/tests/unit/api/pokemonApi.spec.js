import pokemonApi from "@/api/pokemonApi";

describe("api/pokemonApi.js", () => {

    test("debe de estar configurado el baseURL en Axios", () => {
          expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
