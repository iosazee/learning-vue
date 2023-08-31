const app = Vue.createApp({
    //data, functions
    data () {
        return {
            showBooks: true,
            title: 'The Final Destination',
            author: 'Meg Ryan',
            age: 29
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')