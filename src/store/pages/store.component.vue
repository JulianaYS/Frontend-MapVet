<script setup>
import {ref} from 'vue';
const visibleRight = ref(false);
</script>

<script>

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
</template>

<style>

</style>