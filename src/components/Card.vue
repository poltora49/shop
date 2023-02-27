<script setup>
import {useCartStore} from '../stores/cart.js'
import Button from '../components/Button.vue'
import { useProductsStore } from '../stores/product';
const props = defineProps({ product: {} })

const storeCart = useCartStore();
const storeProduct = useProductsStore();
</script>

<template>
    <RouterLink :to="`/product/${product.id}`" class="card flex flex-col items-center  p-5 m-2 rounded-lg text-secondary bg-white">
        <figure class="sm:p-5">
            <img class="card-product object-contain w-full h-60" :src="product.image">
        </figure>
        <h4 class="card-name text-center pt-3 mt-auto">{{storeProduct.titleLimit(product.title)}}</h4>
        <h3 class="card-cost font-bold pt-4">{{product.price}}$</h3>
        <Button 
        @click.prevent='storeCart.add(product.id)' 
        class="my-3 px-4 sm:px-8 py-1 rounded-lg">
            Add to Cart
        </Button>
    </RouterLink>
</template>

