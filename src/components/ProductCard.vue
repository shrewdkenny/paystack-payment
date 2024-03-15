<template>
  <div class="flex flex-col justify-between items-center">
    <img :src="product.pictures[0]" alt="" />
    <h1 class="flex justify-center items-center text-sm font-bold mt-3">
      {{ product.labelText }}
    </h1>
    <h2 class="flex justify-center items-center text-sm text-blue-600 mt-1">
      {{ product.price }}
    </h2>
    <button
      @click="showProduct"
      class="m-5 bg-orange-800 flex h-[50px] w-[200px] rounded-lg justify-center text-center items-center text-sm text-white"
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
