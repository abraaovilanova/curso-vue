<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} </strong><small> (preco: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})</small>
            </v-card-title>
        </v-card> 
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity" :error="isSuficientQuantity || !Number.isInteger(quantity)" @click="sellStock"></v-text-field>
                <v-btn class="blue darken-3 white--text" :disabled="isSuficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" @click="sellStock">
                    {{ isSuficientQuantity? 'Insuficiente' : 'Vender'}}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>

import { mapActions } from 'vuex'
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0,
        }
    },
    computed: {
        isSuficientQuantity(){
            return this.quantity > this.stock.quantity
        }

    },
    methods: {
        ...mapActions({ sellStockActions: 'sellStock' }),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockActions(order)
            // this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
    
}
</script>
<style>

</style>