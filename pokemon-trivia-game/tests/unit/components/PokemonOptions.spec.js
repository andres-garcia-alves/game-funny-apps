import { shallowMount  } from "@vue/test-utils";

import pokemonsMock from "../mocks/pokemons.mock";
import PokemonOptions from "@/components/PokemonOptions";


describe("components/PokemonOptions.vue", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, { props: { pokemons: pokemonsMock } } )
    })

    test("debe de hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot()
        // expect(wrapper.html()).toMatchInlineSnapshot(`<<snapshot template>>`)
    })

    test("debe de mostrar las 4 opciones correctamente", () => {
        const liTags = wrapper.findAll('li')

        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('pikachu')
        expect(liTags[1].text()).toBe('charmander')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('mew')
    })

    test("debe de emitir 'selection' con sus respectivos parms al hacer click", () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')
        
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
        
        expect(wrapper.emitted('selection')[0]).toEqual([5])
        expect(wrapper.emitted('selection')[1]).toEqual([10])
        expect(wrapper.emitted('selection')[2]).toEqual([15])
        expect(wrapper.emitted('selection')[3]).toEqual([20])
    })

})