import { shallowMount, mount  } from "@vue/test-utils";

import pokemonsMock from "../mocks/pokemons.mock";
import PokemonPage from "@/pages/PokemonPage";

describe("pages/PokemonPage.vue", () => {
    
    test("debe coincidir con el snapshot", () => {
        const wrapper = shallowMount(PokemonPage)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("debe coincidir con el snapshot luego de cargado los pokemons", () => {
        const wrapper = mount(PokemonPage, {
            data() {
                return { pokemonArray: pokemonsMock, pokemon: pokemonsMock[0], showPokemon: false, showAnswer: false, message: '' }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test("debe de llamarse mixPokemonArray() al montarse el componente", () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalledTimes(1)
    })

    test("debe de mostrar los componentes PokemonPicture y PokemonOptions", () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return { pokemonArray: pokemonsMock, pokemon: pokemonsMock[0], showPokemon: false, showAnswer: false, message: '' }
            }
        })

        const pictureStub = wrapper.find('pokemon-picture-stub')
        const optionsStub = wrapper.find('pokemon-options-stub')

        expect(pictureStub.exists()).toBe(true)
        expect(optionsStub.exists()).toBe(true)

        expect(pictureStub.attributes('pokemonid')).toBe('5')
        expect(optionsStub.attributes('pokemons')).toBeTruthy()
    })

    test("debe validarse checkAnswer()", async () => {
        // arrange
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return { pokemonArray: pokemonsMock, pokemon: pokemonsMock[0], showPokemon: false, showAnswer: false, message: '' }
            }
        })

        // act (con 'await' para esperar que Vue aplique los cambios en el DOM virtual)
        await wrapper.vm.checkAnswer(5)

        // asserts
        const h2 = wrapper.find('h2')
        expect(h2.exists()).toBe(true)
        expect(h2.text()).toBe(`Correcto, ${ pokemonsMock[0].name }.`)
        expect(wrapper.vm.showPokemon).toBe(true)

        // act (con 'await' para esperar que vue aplique los cambios en el DOM virtual)
        await wrapper.vm.checkAnswer(10)

        // asserts (esta vez sin usar el 'h2', sino con la propiedad 'message')
        expect(wrapper.vm.message).toBe(`Ups, en realidad es: ${ pokemonsMock[0].name }.`)
    })
})
