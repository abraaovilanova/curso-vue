new Vue({
    el: '#desafio',
    data: {
        nome: 'Abraão Alves Vila Nova',
        idade: 26,
        link: 'https://th.bing.com/th/id/OIP.7UGWOO-RZmapid-oaCOLkwHaGa?pid=Api&rs=1'
    },
    methods: {
        idadeVezes3: function(){
            return this.idade*3
        },
        aleatorio: function(){
            return Math.random()
        }
    }
})