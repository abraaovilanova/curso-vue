<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} </strong><small> (preco: {{ stock.price | currency}})</small>
            </v-card-title>
        </v-card> 
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" 
                    v-model.number="quantity" :error="isSufficientFunds || !Number.isInteger(quantity)" />
                <v-btn class="green darken-3 white--text" :disabled="isSufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock">
                    {{ isSufficientFunds ? 'Saldo Insuficiente':'Comprar' }}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0,
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        },
        isSufficientFunds() {
            return this.quantity * this.stock.price > this.funds
        }

    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
        }
    }
    
}
</script>
<style>

</style>