<template>
  <nav class="flex flex-row justify-between px-20 mt-8 h-[5vh]">
    <div class="font-thin font-mono text-2xl drop-shadow-2xl">
      <router-link to="/"> NorthStar</router-link>
    </div>
    <ul class="flex flex-row space-x-4 font-semibold">
      <li><router-link to="/"> HOME</router-link></li>
      <li>ABOUT</li>
      <li>CONTACT US</li>
    </ul>
    <div class="flex flex-row gap-5 font-normal font-mono text-xl">
      <i class="fa-regular fa-user"></i>
      <div class="relative">
        <router-link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <h1
            class="absolute top-[-19px] left-2 text-orange-500 text-sm font-serif"
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
