<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade do Usuario <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="reiniciarIdadeFn">reiniciar idade</button>
    </div>
</template>

<script>
import barramento from '../barramento'
export default {
    props: ['idade',"reiniciarIdadeFn"],
    methods: {
        alterarIdade() {
            this.idade = 33
            barramento.alterandoIdade(this.idade)
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
