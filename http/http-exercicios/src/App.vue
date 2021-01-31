<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible 
			v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o Email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="success">Salvar</b-button>
			<b-button @click="obterUsuarios" class="ml-2" size="lg" variant="outline-success">Obter usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }}<br>
				<strong>Email: </strong> {{ usuario.email }}<br>
				<strong>ID: </strong> {{ id }}<br>
				<b-button @click="carregar(id)" variant="outline-warning" size="lg">Carregar</b-button>
				<b-button @click="excluir(id)" class="ml-2" variant="outline-danger" size="lg">Excluir</b-button>

			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: '',
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`usuarios${finalUrl}`, this.usuario).then(resp => {
				this.limpar()
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success'
				})
			} )
		},
		obterUsuarios() {
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
			})
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}

		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then(resp => this.limpar()).catch(err => this.mensagens.push({
				texto: 'Problema para excluir!',
				tipo: 'danger'
			}))
		}
	}
	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'maria',
	// 		email: 'maria_maria@gmail.com',
	// 	}).then(res => console.log(res))
	// }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
