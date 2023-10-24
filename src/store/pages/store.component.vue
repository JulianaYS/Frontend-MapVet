<script setup>
import {ref} from 'vue';
const visibleRight = ref(false);
</script>

<script>
import {StoreApiService} from "@/store/services/store-api.service";

export default {
  data() {
    return {
      products: [],
      cart: [],
      totalPrice: 0,
    };
  },

  created() {
    const storeApiService = new StoreApiService();
    storeApiService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      this.totalPrice += parseFloat(product.price);
    },

  },
};
</script>

<template>
  <div class="card">
    <pv-toolbar style="background: #fff0cb;">
      <template #start>
        <pv-button class="mr-2" label="Our products" style="background: #b4eee8; color:black;"/>
      </template>

      <template #end>
        <pv-button class="mr-2" icon="pi pi-shopping-cart" :label="'Cart (' + cart.length + ')'" style="background: #c39777; color:black;" @click="visibleRight = true"/>
      </template>
    </pv-toolbar>
  </div>

  <div class="card-container">
    <div v-for="product in products" :key="product.id" class="card flex align-items-center justify-content-center">
      <pv-card style="width: 18em">
        <template #header>
          <img :src="product.image" alt="Product Image">
        </template>
        <template #title>{{ product.name }}</template>
        <template #subtitle> {{ product.description }}</template>
        <template #content><b>S/ {{ product.price }}</b></template>
        <template #footer>
          <pv-button class="w-full" icon="pi pi-shopping-cart" label="Add to cart" severity="success" @click="addToCart(product)"/>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style>

</style>