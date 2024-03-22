<template>
  <!-- small screen -->
  <div class="h-screen w-full flex flex-col bg-[#f1f1f2]">
    <h1 class="text-sm text-gray-600 p-2">CART SUMMARY</h1>
    <div class="flex flex-row justify-between mt-2 p-2 bg-white">
      <p class="text-sm font-normal text-gray-600">Subtotal</p>
      <p class="text-sm font-normal">₦{{ totalPrice }}</p>
    </div>
    <h1 class="sm:text-sm text-gray-600 p-2 mt-3">CART</h1>
    <div
      class="flex flex-col h-[150px] w-[100%] px-5 justify-between border-b-2 mt-3 bg-white p-2"
      v-for="item in cartItems"
      :key="item.id"
    >
      <div class="flex flex-row gap-2">
        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[90px] w-[80px]"
        />
        <div class="flex flex-col">
          <p class="text-sm font-normal">{{ item.labelText }}</p>
          <p class="font-normal mt-3">₦{{ item.price }}</p>
        </div>
      </div>
      <div class="text-orange-500 flex flex-row justify-between">
        <div class="flex gap-2">
          <div class="text-sm">
            <i
              class="fa-solid fa-trash"
              @click="removeFromCart(cartItems.indexOf(item))"
            ></i>
          </div>
          <p class="text-sm">REMOVE</p>
        </div>
        <div class="flex gap-10">
          <button
            class="text-sm font-bold text-white bg-orange-200 w-[30px] h-[30px] rounded text-[10px] flex justify-center items-center"
            @click="handleDecreaseQty(cartItems.indexOf(item))"
          >
            -
          </button>
          <div class="text-xl">
            {{ item.quantity }}
          </div>
          <button
            class="text-sm font-bold text-white bg-orange-400 w-[30px] h-[30px] rounded text-[10px] flex justify-center items-center"
            @click="handleIncreaseQty(cartItems.indexOf(item))"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <Paystack
      :amount="totalPrice"
      :callback="processPayment"
      :close="closeFunction"
      :embed="true"
    />
  </div>

  <!-- large screen -->

  <!-- <div
    class="lg:h-screen lg:w-full flex flex-row px-40 gap-10 bg-[#f1f1f2] relative"
  >
    <div class="bg-white w-[70%] gap-10 flex flex-col mt-5 rounded-lg h-[100%]">
      <h1 class="font-normal py-2 text-2xl border-b px-2">Cart</h1>
      <div
        class="flex flex-row h-[100px] px-5 justify-between border-b-2"
        v-for="item in cartItems"
        :key="item.id"
      >
        <div class="flex flex-row space-x-5 text-2xl">
          <div class="text-orange-500 mt-3 flex gap-2">
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
            <p class="text-lg font-normal">{{ item.labelText }}</p>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="font-black flex justify-center">₦{{ item.price }}</p>
          <div class="flex flex-row gap-4 mt-10">
            <button
              class="text-sm font-bold text-white bg-orange-200 w-[30px] h-[30px] rounded text-[10px] flex justify-center items-center"
              @click="handleDecreaseQty(cartItems.indexOf(item))"
            >
              -
            </button>
            <div class="text-xl">
              {{ item.quantity }}
            </div>
            <button
              class="text-sm font-bold text-white bg-orange-400 w-[30px] h-[30px] rounded text-[10px] flex justify-center items-center"
              @click="handleIncreaseQty(cartItems.indexOf(item))"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col bg-white w-[30%] h-[24%] px-2 mt-5 fixed ml-[800px] rounded-lg"
    >
      <h1 class="mt-2">Cart summary</h1>
      <div class="flex justify-between mt-5 border-y p-2">
        <p class="text-sm font-normal text-gray-600">Subtotal</p>
        <p class="text-xl font-normal">₦{{ totalPrice }}</p>
      </div>

      <Paystack
        :amount="totalPrice"
        :callback="processPayment"
        :close="closeFunction"
        :embed="true"
      />
    </div>
  </div> -->
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
      const item = cartItems[index];
      cartStore.increaseQty(index);
      item.price = (item.initialPrice * item.quantity).toFixed(2);
    };

    const handleDecreaseQty = (index) => {
      if (cartItems[index].quantity === 1) {
        return;
      }

      const item = cartItems[index];
      cartStore.decreaseQty(index);
      item.price = (item.initialPrice * item.quantity).toFixed(2);
    };

    const removeFromCart = (index) => {
      cartItems.splice(index, 1);
      cartStore.count -= 1;
    };
    const processPayment = (response) => {
      if (response.status === "success") {
        cartStore.clearCart();
      }
    };
    const closeFunction = () => {
      console.log("payment closed");
    };

    return {
      cartItems,
      totalPrice,
      handleIncreaseQty,
      handleDecreaseQty,
      removeFromCart,
      processPayment,
      closeFunction,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
