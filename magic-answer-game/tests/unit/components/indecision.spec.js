import { shallowMount } from '@vue/test-utils'
import MagicAnswer from '@/components/MagicAnswer.vue'

describe("MagicAnswer.vue", () => {
    let wrapper, consoleSpy;

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(MagicAnswer)

        consoleSpy = jest.spyOn(console, 'log') // console.log()
        jest.clearAllMocks()
    })

    test("debe de hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("no debe de cambiar nada hasta que se escriba el caracter '?'", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')            // necesita "expose: ['getAnswer']" en el componente
        // const getAnswerSpy = jest.spyOn(MagicAnswer.methods, 'getAnswer') // equivale a MagicAnswer.getAnswer()

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    })

    test("debe de disparar un getAnswer() cuendo se escriba el caracter '?'", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')            // necesita "expose: ['getAnswer']" en el componente
        // const getAnswerSpy = jest.spyOn(MagicAnswer.methods, 'getAnswer') // equivale a MagicAnswer.getAnswer()
        
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test("debe procesarse la respuesta de la API externa", async () => {

        // arrange & act
        await wrapper.vm.getAnswer()        
        const image = wrapper.find('img')

        // asserts
        expect(image.exists()).toBe(true)
        expect(wrapper.vm.answer).toBe('Si ;-)')
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif')
    })

    test("debe validarse un fallo en la respuesta de la API externa", async () => {

        // arrange & act
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()   
        const image = wrapper.find('img')

        // asserts
        expect(image.exists()).toBe(false)
        expect(wrapper.vm.answer).toBe('Error en el llamado a la API')
    })
})
