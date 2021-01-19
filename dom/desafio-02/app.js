new Vue({
    el: '#desafio',
    data: {
        valor: 0

    },
    methods: {
        exibirAlerta(){
            alert('O botão foi clicado!')
        },
        armazenarValor(e) {
            this.valor = e.target.value
        }
    }

})