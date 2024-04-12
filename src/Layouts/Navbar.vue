<template>
  <nav
    class="flex px-5 flex-row w-full bg-white fixed justify-between lg:flex lg:flex-row lg:justify-between lg:px-20 lg:fixed top-0 lg:bg-white text-gray-900 z-20 bg-white-400 py-4"
  >
    <div class="font-thin font-mono text-2xl drop-shadow-2xl">
      <router-link to="/"> NorthStar</router-link>
    </div>
 
    <ul class="hidden lg:flex flex-row space-x-4 font-semibold">
      <li><router-link to="/"> HOME</router-link></li>
      <li>ABOUT</li>
      <li>CONTACT US</li>
    </ul>
    <div class="lg:flex flex-row gap-5 font-normal font-mono text-xl">
      <div class="hidden"><i class="fa-regular fa-user"></i></div>

      <div class="relative flex">
        <router-link to="/cart">
          <div class="text-2xl"><i class="fa-solid fa-cart-shopping"></i></div>
          <h1
            class="absolute top-[-5px] text-[15px] left-4 lg:absolute lg:top-[-8px] lg:left-4 bg-orange-400 text-white rounded-full h-6 w-6 flex justify-center items-center lg:text-[15px] font-serif"
          >
            {{ increaseCount.count }}
          </h1>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCart } from "@/stores/CartStore";
import { RouterLink } from "vue-router";
export default {
  setup() {
    const increaseCount = useCart();
    return {
      increaseCount,
    };
  },
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
