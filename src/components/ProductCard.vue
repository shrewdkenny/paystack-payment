<template>
  <div class="flex w-full flex-col justify-between px-2 relative">
    <img :src="product.pictures[0]" alt="" />
    <h1 class="flex justify-center items-center text-sm font-bold mt-4">
      {{ product.labelText }}
    </h1>

    <h2 class="flex justify-center items-center text-sm text-gray-600 mb-7">
      ₦{{ product.price }}
    </h2>
    <div
      @click="showProduct"
      class="absolute text-white bg-orange-400 text-lg font-semibold h-12 w-[374px] flex justify-between items-center top-[386px] lg:top-[352px] lg:w-[344px]"
    >
      <div class="ml-2"><i class="fa-solid fa-cart-shopping"></i></div>

      <button class="mr-10">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    showProduct() {
      this.$emit("addingToCart", this.product);
    },
  },
};
</script>

<style></style>
