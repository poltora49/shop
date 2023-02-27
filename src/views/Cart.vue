<script setup>
import CardCart from '../components/CardCart.vue'
import Button from '../components/Button.vue'
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const store = useCartStore();
const formattedCart = computed(() => store.formattedCart);


</script>

<template>
  <main class="mx-14 lg:mx-28 text-secondary">
    <section class="cart-list rounded-lg bg-white p-4 my-10">
      <div v-if="!formattedCart.length">
        <h1 class="text-xl">Cart is empty.</h1>
      </div>
      <CardCart v-else
      v-for="(product, index) in formattedCart"
      :key="index"
      :product="product"
      />
    </section>
    <section class="cart-total text-right font-bold" v-if="formattedCart.length">
      <h3 class="">Total: </h3>
      <h3 v-text="store.total+' $'"></h3>
    </section>
    <section class="buy text-right" v-if="formattedCart.length">
      <Button
        @click.prevent="store.clearAll()"
        class="my-3 px-4 sm:px-8 py-1 rounded-lg text-white">
        Buy clothes
      </Button>
    </section>
  </main>
  </template>