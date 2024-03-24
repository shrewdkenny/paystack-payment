<template>
  <div class="flex w-full flex-col justify-between px-2 relative">
    <img :src="product.pictures[0]" alt=""  />
    <h1 class="flex justify-center items-center text-sm font-bold mt-2">
      {{ product.labelText }}
    </h1>

    <h2 class="flex justify-center items-center text-sm text-blue-600 mb-7">
      ₦{{ product.price }}
    </h2>
    <button
      @click="showProduct"
    class="absolute text-white bg-orange-400 items-center text-sm h-12 w-[374px] top-[386px] lg:top-[352px] lg:w-[344px]"
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
