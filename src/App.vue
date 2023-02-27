<script setup>
	import { RouterView } from 'vue-router'
	import Nav from './components/Nav.vue'
	import { usePersistCart } from './composables/usePersistCart';
	import { useProductsStore } from './stores/product';
	const productsStore = useProductsStore();
	productsStore.fetchAll();
	usePersistCart();
	
</script>

<template>
    <header class="flex items-center px-4 rounded-b-3xl bg-header text-white">
		<Nav />
  	</header>
  		<RouterView />
</template>


