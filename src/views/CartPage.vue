<template>
  <div class="h-screen w-full flex flex-col">
    <div class="flex flex-row gap-[300px] border-b-2 w-auto mt-[100px]">
      <h1 class="ml-[150px] w-[100px] text-2xl font-black">Products</h1>
      <p class="text-2xl font-black ml-[100px]">Price</p>
    </div>

    <div
      class="flex flex-row mt-[50px] h-[10vh]"
      v-for="item in cartItems"
      :key="item.id"
    >
      <div class="ml-[150px] w-[500px] text-2xl flex flex-row space-x-10">
        <div class="mt-2">
          <i
            class="fa-solid fa-trash"
            @click="removeFromCart(cartItems.indexOf(item))"
          ></i>
        </div>

        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[50px] w-[40px]"
        />
        <div class="flex flex-col">
          <p class="text-lg font-black">{{ item.labelText }}</p>
          <div class="flex flex-row gap-4">
            <h1 class="text-sm font-normal">qty</h1>
            <button
              class="text-sm font-bold text-red-500 w-[20px] h-[20px] border-2 text-[10px] flex justify-center items-center"
              @click="handleDecreaseQty(cartItems.indexOf(item))"
            >
              -
            </button>
            <div class="text-sm">
              {{ item.quantity }}
            </div>
            <button
              class="text-sm font-bold text-green-400 w-[20px] h-[20px] border-2 text-[10px] flex justify-center items-center"
              @click="handleIncreaseQty(cartItems.indexOf(item))"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <p class="flex flex-row justify-center font-black">₦{{ item.price }}</p>
    </div>
    <div class="flex flex-col justify-center items-center mb-40">
      <p class="text-2xl font-black ml-10 mt-10">Total: ₦{{ totalPrice }}</p>

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
        const itemPrice = parseFloat(item.price.replace(/₦/g, ""));
        if (!isNaN(itemPrice)) {
          return total + itemPrice;
        } else {
          return total;
        }
      }, 0);
    });

    const handleIncreaseQty = (index) => {
      cartStore.increaseQty(index);
      const itemPrice = parseFloat(cartItems[index].price.replace(/₦/g, ""));

      cartItems[index].price = (itemPrice * 2).toFixed(2);
    };

    const handleDecreaseQty = (index) => {
      if (cartItems[index].quantity === 1) {
        return;
      }
      cartStore.decreaseQty(index);
      const itemPrice = parseFloat(cartItems[index].price.replace(/₦/g, ""));
      cartItems[index].price = (itemPrice / 2).toFixed(2);
    };
    const removeFromCart = (index) => {
      cartItems.splice(index, 1);
      cartStore.count -= 1;
    };

    return {
      cartItems,
      totalPrice,
      handleIncreaseQty,
      handleDecreaseQty,
      removeFromCart,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
