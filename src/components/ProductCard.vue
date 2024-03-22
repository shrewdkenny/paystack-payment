<template>
  <div class="flex flex-col justify-between items-center relative">
    <img :src="product.pictures[0]" alt="" class="rounded-lg" />
    <h1 class="flex justify-center items-center text-sm font-bold mt-10">
      {{ product.labelText }}
    </h1>

    <h2 class="flex justify-center items-center text-sm text-blue-600 mb-7">
      ₦{{ product.price }}
    </h2>
    <button
      @click="showProduct"
      class="lg:m-5 bg-black flex h-[50px] w-[100%] justify-center text-center items-center text-sm text-white absolute top-[300px]"
    >
      Add To Cart
    </button>
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
