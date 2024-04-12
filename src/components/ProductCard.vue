<template>
  <div class="flex flex-col">
    <div
      class="w-[100%] h-[300px] bg-cover flex flex-col justify-end rounded-sm"
      :style="{ 'background-image': 'url(' + product.pictures[0] + ')' }"
    >
      <div
        @click="showProduct"
        class="text-white bg-orange-400 text-lg font-semibold flex justify-between items-center px-2 py-2"
      >
        <div class=""><i class="fa-solid fa-cart-shopping"></i></div>

        <button class="">Add To Cart</button>
      </div>
    </div>
    <h1 class="text-md font-bold flex justify-center mt-3">
      {{ product.labelText }}
    </h1>

    <h2 class="flex justify-center items-center text-sm text-gray-600">
      ₦{{ product.price }}
    </h2>
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
