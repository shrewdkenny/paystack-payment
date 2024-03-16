<template>
  <div class="h-screen w-full flex flex-col">
    <div class="flex flex-row gap-[300px] border-b-2 w-auto mt-[100px]">
      <h1 class="ml-[150px] w-[100px] text-2xl font-black">Products</h1>
      <p class="text-2xl font-black ml-[190px]">Price</p>
    </div>

    <div
      class="flex flex-row mt-[50px] h-[10vh]"
      v-for="item in cartItems"
      :key="item.id"
    >
      <div class="ml-[150px] w-[600px] text-2xl flex flex-row space-x-10">
        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[50px] w-[50px]"
        />
        <p class="text-lg font-black">{{ item.labelText }}</p>
      </div>
      <p class="flex flex-row justify-center font-black">{{ item.price }}</p>
    </div>
    <div class="flex flex-col justify-center items-center mb-40">
      <p class="text-2xl font-black ml-10 mt-10">Total: ₦{{ totalPrice }}</p>

      <!-- Passing totalPrice and other necessary props to Paystack component -->
      <Paystack
        :amount="totalPrice"
        :email="email"
        :reference="reference"
        :callback="processPayment"
        :close="close"
        :embed="true"
      />
    </div>
  </div>
</template>

<script>
import { useCart } from "@/stores/CartStore";
import Paystack from "../components/Paystack.vue";
import { computed } from "vue";

export default {
  components: {
    Paystack,
  },
  setup() {
    const cartStore = useCart();
    const cartItems = cartStore.items;

    const totalPrice = computed(() => {
      return cartItems.reduce((total, item) => {
        return total + parseFloat(item.price.replace(/\₦/g, ""));
      }, 0);
    });
    return {
      cartItems,
      totalPrice,
    };
  },
};
</script>

<style lang="scss" scoped></style>
