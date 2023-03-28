<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductService from "@/lib/axios/product";
onMounted(() => {
  AOS.init({ disable: 'phone' })
  getProducts()
})
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
const products = ref<Product[]>([])

function getProducts() {
  let params = {
    limit: 3
  }
  ProductService.getProduct({ params }).then(res => {
    products.value.push(...res.data.products)
  })
}


</script>


<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-28 pt-[50px] lg:pt-[178px] bg-black">
      <BaseSection>
        <div class="col-span-12 lg:col-span-4   px-6 text-center sm:text-left">
          <div data-aos="fade-right" data-aos-once="false"
            class="sm:text-7xl text-5xl  font-bold  leading-[3rem] space-y-6 text-white flex flex-col">
            <div class="block">LOREM </div>
            <div class="text-[#D9EF0C] block">IPSUM</div>
          </div>
          <div data-aos="fade-right" data-aos-once="false" data-aos-delay="500"
            class="flex flex-col sm:flex-row sm:space-x-4 mt-14 text-white text-base font-semibold">
            Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
          </div>
          <div data-aos="fade-right" data-aos-once="false" data-aos-delay="500"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 text-white text-sm font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-8 px-10">
          <div class="w-full">
            <img data-aos="fade-up" data-aos-once="false" src="~/assets/img/Bicycle-PNG-Image1.png" alt="" />
          </div>
        </div>
      </BaseSection>
    </section>

    <section id="hero2" class="w-full  bg-black">
      <Swiper :height="300" :slides-per-view="1" :loop="true" :navigation="true" :effect="'creative'"
        :modules="[SwiperNavigation]" :SwiperNavigation="true">
        <SwiperSlide v-for="(slide, idx) in 5" :key="idx">
          <div class="container w-full px-5 py-24 mx-auto">
            <div class="font-semibold text-4xl text-center">
              <span class="text-white">LOREM IPSUM</span> <span class="text-[#D9EF0C]">LOREM {{ slide }}</span>
            </div>
            <div class="flex flex-col text-center items-center justify-center w-full mt-14">
              <img src="~/assets/img/Ellipse.png" data-aos="fade-up" data-aos-delay="300" class="w-[200px] h-[200px]">
              <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500"
                class="text-xl font-medium title-font mb-4 text-white mt-12">Lorem Ipsum is simply</h1>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500"
                class="lg:w-2/3 mx-auto px-16 sm:px-52 leading-relaxed text-xs text-white">Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section id="hero3" class="w-full  bg-[#D9EF0C]">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center text-4xl pb-20 font-semibold">
          LOREM IPSUM
        </div>
        <div class="flex flex-wrap justify-center ">
          <CardItem data-aos="fade-up" data-aos-once="false" v-for="(item, idx) in products" :product="item" :key="idx" />
        </div>
      </div>
    </section>

    <section id="hero" class="w-full pb-28 pt-[50px] lg:pt-[178px] bg-black">
      <BaseSection>
        <div class="hidden sm:block col-span-12 lg:col-span-6 px-10">
          <div class="w-full">
            <img data-aos="fade-up" data-aos-once="false" src="~/assets/img/Bicycle-PNG-Image1.png" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6   px-6  sm:text-left">
          <div class="text-white text-4xl font-semibold"> 
            ติดต่อเรา
          </div>
          <ContactForm />
        </div>
      </BaseSection>
    </section>

  </div>
</template>

