<script setup lang="ts">
const props = defineProps({
    product: {
        type: Object,
        default: () => { },
    },
});

</script>

<template>
    <div class="lg:w-1/4 w-full bg-white overflow-hidden mt-4 m-4">
        <a class="block relative h-48  overflow-hidden">
            <img class="object-cover object-center w-full h-full block" :src="product.thumbnail">
        </a>
        <div class="p-4 space-y-2">
            <h3 class="text-gray-500 text-sm  mb-1 font-bold">{{ product.title }}</h3>
            <h2 class="text-gray-900 title-font text-xs font-medium"
                style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ product.description }}</h2>
            <p class="mt-1 text-xs ">${{ product.price }}</p>
        </div>
    </div>
</template>

