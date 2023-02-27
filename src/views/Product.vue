<script setup>
import Button from '../components/Button.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/cart';
import { useProductsStore } from '../stores/product';
const storeCart = useCartStore();
const storeProduct = useProductsStore();
const route = useRoute();
const product = computed(
  () => storeProduct.items[route.params.productId]
);
</script>
<template>
    <main class="mx-6 sm:mx-16 lg:mx-24">
        <section class="product">
            <div class="product flex flex-col lg:flex-row items-center p-5 m-2 rounded-lg text-secondary bg-white">
                <figure class="product-image flex justify-center m-6 max-w-sm">
                    <img class="card-product w-2/3 mt-auto" :src="product.image">
                </figure>
                <div class="product-discription text-center lg:text-right">
                    <h3 class="product-name  pt-3 font-extrabold text-xl lg:text-left">{{product.title}}</h3>
                    <h5 class=" lg:text-left">{{ product.description }}</h5>
                    <h3 class="product-cost font-bold pt-4">{{product.price}}$</h3>
                    <Button @click.prevent='storeCart.add(product.id)'
                        class="my-3 px-4 sm:px-8 py-1 rounded-lg text-end">Add to Cart
                    </Button>
                </div>
            </div>
        </section>
    </main>
</template>