<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const count = computed(() => cartStore.count);
</script>

<template>
    <RouterLink to="/">
      <img alt="logo" class="ml-4 self-start w-20 h-20 lg:w-24 lg:h-24 sm" src="@/assets/image/logo.svg" width="100px" height="100px" />
    </RouterLink>
      <nav class="flex justify-end w-11/12 mr-4">
        <ul class="text-white flex flex-row">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/Cart">Cart 
            <img class="w-6 ml-4" src="@/assets/image/cart.svg" alt="cart">
            <span class="absolute -top-2 right-0 text-xs rounded-full px-1 bg-secondary"  v-text="count"></span>
        </RouterLink>
          </li>
        </ul>
      </nav>
</template>