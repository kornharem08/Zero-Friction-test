<script setup lang="ts">
const contact = ref({
    name: '',
    phone: '',
    email: '',
    date: new Date()
})

function handleSubmit() {
    alert('ส่งเรียบร้อย')
}
</script>

<template>
    <form @submit.prevent="handleSubmit()" class="py-4 mt-6">
        <BaseInputText id="name" name="name" placeholder="ชื่อ-นามสกุล" type="text" v-model="contact.name" />
        <BaseInputText id="name" name="name" placeholder="เบอร์ติดต่อ" type="text" v-model="contact.phone" />
        <BaseInputText id="name" name="name" placeholder="อีเมล" type="email" v-model="contact.email" />
        <BaseInputText id="name" name="name" placeholder="วันที่" type="date" v-model="contact.date" />
        <p class="text-white text-xs">
            Lorem Ipsum is simply dummy text<br>
            Lorem Ipsum is simply dummy text
        </p>
        <button type="submit" class="btn-submit mt-10">submit</button>
    </form>
</template>