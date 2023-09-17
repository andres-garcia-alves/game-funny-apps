<template>
    <div>
        <img v-if="image" :src="image" alt="bg">
        <div class="bg-dark"></div>
        <div class="magic-answer-container">
            <input type="text" placeholder="Estás indeciso? Preguntame lo que quieras..." v-model=question>
            <p>Para terminar la pregunta usa un signo de interrogación '?'</p>

            <div v-if="questionText">
                <h3 class="question">{{ questionText }}</h3>
                <h1 class="answer">{{ answer }}</h1> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MagicAnswer',
    data() {
        return {
            question: null,
            questionText: null,
            answer: null,
            image: null
        }        
    },
    watch: {
        async question(value, oldValue) {
            console.log({ value })
            if (value.includes('?') == false) { return }

            await this.getAnswer();

            this.questionText = this.question
            this.question = ''
        }
    },
    expose: ['getAnswer', 'answer', 'image'],
    methods: {
        async getAnswer() {
            try {
                this.answer = 'pensando...'

                const response = await fetch('https://yesno.wtf/api')
                const { answer, image } = await response.json()

                this.image = image

                if (answer === 'yes')           { this.answer = 'Si ;-)' }
                else if (answer === 'no')       { this.answer = 'No!' }
                else if (answer === 'maybe')    { this.answer = 'Tal vez' }
                else                            { this.answer = 'Ni idea' }
            }
            catch (error) {
                console.log('Error', error)
                this.answer = 'Error en el llamado a la API'
                this.image = null
            }
        }
    }
}
</script>

<style scoped>
img, .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}
p {
    color: white;
    font-size: 12px;
    margin-top: 0px;
}
input:focus {
    outline: none;
}
.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}
.magic-answer-container {
    position: relative;
    z-index: 99;
}
.magic-answer-container input {
    width: 400px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
.magic-answer-container p {
    margin-top: 25px;
}
.magic-answer-container .question {
    color: white;
    margin-top: 120px;
}
.magic-answer-container .answer {
    color: white;
    margin-top: 50px;
}
</style>
