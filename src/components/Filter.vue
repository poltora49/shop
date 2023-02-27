<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '../stores/product.js'

const store = useProductsStore()
const filters = computed(() =>store.filterLists)
</script>

<template>
    <section class="filters flex">
        <ul class="flex flex-wrap justify-center mx-6 ">
            <li v-for="filter in filters"
            >
                <button 
                v-bind:class="{
                    'bg-[#7F5B2F] text-main' : store.appliedFilters.includes(filter)
                    }"
                class="inline-block outline-none px-4 py-2 mt-2 border-2 border-solid transition-all duration-200
                 text-text-button border-[#7F5B2F] hover:bg-[#7F5B2F] hover:text-main"
                @click.prevent='store.addFilter(filter)'>{{ filter.charAt(0).toUpperCase() + filter.slice(1) }}</button>
            </li>
        </ul>
    </section>
</template>