const app = Vue.createApp({
    //data, functions
    data () {
        return {
            title: 'The Final Destination',
            author: 'Meg Ryan',
            age: 29
        }
    },
    methods: {
        changeTitle() {
            this.title = "words of wisdom"
        }
    }
})

app.mount('#app')