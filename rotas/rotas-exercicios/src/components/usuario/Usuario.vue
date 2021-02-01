<template>
    <div class="usuario">
        <h1>Usuario</h1>
        <hr>
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio(){
            // this.$router.push({ path: '/'})
            this.$router.push({ name: 'inicio'})
        }
    }
    
}
</script>
<style>

</style>