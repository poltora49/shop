
<script setup>
import Card from '../components/Card.vue'
import Filter from '../components/Filter.vue'
import { computed } from 'vue'
import { useProductsStore } from '../stores/product.js'

const store = useProductsStore()
const products = computed(() => store.listFiltered)
</script>

<template>
  <main class="flex flex-col items-center justify-center mx-4 md:mx-10 lg:mx-16">
    <Filter />
    <section class="card-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto ">
      <Card v-for="product in products"
        :key="product.id" 
        :product="product"/>
    </section>
  </main>
</template>


