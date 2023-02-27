<script setup>
import Arrow from "../components/icons/Arrow.vue"
import { useCartStore } from '../stores/cart'
const store = useCartStore()
const props = defineProps({ product: {} })
</script>

<template>
    <div v-if="product"
     class="card relative overflow-hidden flex flex-col sm:flex-row items-center p-5 px-10 m-2 border-t-2
      border-secondary first:border-none">

        <RouterLink :to="`/product/${product.id}`"
        class="card-image flex justify-center p-5">
            <img class="object-contain w-full h-60"
            alt="card Image"
            :src="product.image"/>
        </RouterLink>

        <div class="card-description">
            <h4 class="card-name text-center pt-3 sm:pl-6">{{product.title}}</h4>
            <div class="flex my-5 items-center justify-center sm:justify-start sm:pl-20">
                <Arrow v-show="product.quantity > 1"
                class=" rotate-180"  
                @click.prevent="store.remove(product.id)"/>
                    <p class="mx-2">{{ product.quantity }}</p>
                <Arrow  @click.prevent="store.add(product.id)"/>
            </div>
        </div>

        <h3 class="card-cost font-bold pt-4 sm:ml-auto">{{product.cost.toFixed(2)}}$</h3>

        <button 
            type="button" 
            class="btn-close absolute m-2 right-0 top-0 text-3xl hover:bg-transparent after:inline after:content-['\00d7']"
            @click.prevent="store.clear(product.id)">
        </button>
    </div>
</template>