<script setup lang="ts">
import { onMounted } from 'vue'
import { 
    initDropdowns,
 } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initDropdowns();
})
const menu = [
    {
      key: "1",
      title: "LOREM",
      route: `/LOREM`,
      dropdown_id: "dropdown-master-1",
      menu: []
    },
    {
      key: "2",
      title: "LOREM",
      route: `/LOREM`,
      dropdown_id: "dropdown-master-2",
      menu: [
        {
          key: "2-1",
          title: "test1",
          route: `/LOREM/LOREM`,
          dropdown_id: "",
          menu: [],
        },
        {
          key: "2-2",
          title: "test2",
          route: `/LOREM/LOREM`,
          dropdown_id: "",
          menu: [],
        }]
    },
    {
      key: "3",
      title: "LOREMIPSUM",
      route: `/LOREM`,
      dropdown_id: "dropdown-master-3",
      menu: []
    },
    {
      key: "4",
      title: "LOREM & IPSUM",
      route: `/LOREM`,
      dropdown_id: "dropdown-master-4",
      menu: []
    },
    {
      key: "4",
      title: "LOREM",
      route: `/LOREM`,
      dropdown_id: "dropdown-master-4",
      menu: []
    },
]

</script>

<template>
   <header class=" body-font bg-black">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
      <img src="~/assets/img/kindpng.png" alt="">
      <div class="ml-3 text-xl italic"> <span class="text-white">LOREM</span>  <span class="text-[#D9EF0C]">IPSUM</span> </div>
    </a> 
    <div class="hidden w-full md:block md:w-auto md:mr-auto md:ml-20 md:py-1 md:pl-4 " id="navbar-dropdown">
      <ul class="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">

        <li v-for="(item,idx) in  menu" :key="idx">
            <button :id="item.dropdown_id+'id'" :data-dropdown-toggle="item.dropdown_id" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{{item.title}} <svg class="w-5 h-5 ml-1" v-if="item.menu.length" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </button>
            <!-- Dropdown menu -->
            <div v-if="item.menu.length" :id="item.dropdown_id" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-black " >
                  <li v-for="(list,index) in item.menu" :key="index">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{list.title}}</a>
                  </li>
               
                </ul>
            </div>
        </li>
      </ul>
    </div>
    <!-- <nav class="md:mr-auto md:ml-20 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-white hover:text-gray-400 cursor-pointer">First Link</a>
      <a class="mr-5 text-white hover:text-gray-400 cursor-pointer">Second Link</a>
      <a class="mr-5 text-white hover:text-gray-400 cursor-pointer">Third Link</a>
      <a class="mr-5 text-white hover:text-gray-400 cursor-pointer">Fourth Link</a>
    </nav> -->
  </div>
</header>
</template>