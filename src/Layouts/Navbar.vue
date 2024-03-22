<template>
  <nav
    class="flex px-5 flex-row w-full justify-between my-5 lg:flex lg:flex-row lg:justify-between lg:px-20 lg:mt-8 h-[5vh]"
  >
    <Link to="/">
      <div class="flex text-2xl lg:hidden">
        <i class="fa-solid fa-house"></i></div
    ></Link>

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
            class="absolute top-[-19px] left-2 text-lg lg:absolute lg:top-[-16px] lg:left-2 text-orange-500 lg:text-sm font-serif"
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
