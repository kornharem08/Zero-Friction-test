<script setup lang="ts">
const props = defineProps({
    modelValue: [String, Number, Object, Array],
    label: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    error: {
        type: String,
    },


});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="relative z-0 w-full mb-6 group">
        <input :type="type" :modelValue="modelValue" :value="modelValue"
            @input="(evt) => emit('update:modelValue', (evt.target as HTMLInputElement).value)" :name="name" :id="id"
            class="block py-2.5 text-left px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
        <label :for="id"
            class="peer-focus:font-medium absolute text-sm text-left peer-focus:text-left text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            {{ placeholder }}
        </label>
        <Icon v-if="type === 'date'" size="20" class="absolute top-3 right-0 z-10  text-white pointer-events-none"
            name="heroicons:calendar-days-20-solid" />

    </div>
</template>
