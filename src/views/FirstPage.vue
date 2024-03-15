<template>
  <main class="h-screen w-full bg-[#ffff]">
    <section
      class="first py-[100px] bg-cover bg-no-repeat flex flex-col justify-end items-end"
    >
      <div class="w-[500px] mb-[300px]">
        <h1 class="text-white text-5xl font-mono font-semibold mb-[20px]">
          STYLIST PICKS BEAT THE HEAT
        </h1>
        <button
          class="text-white text-xl font-medium border-white border-[3px] ml-[50px]"
        >
          SHOP NOW
        </button>
      </div>
    </section>

    <div class="two bg-white h-[100vh] mt-20">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-normal">Discover NEW Arrivals</h1>
        <p class="mt-5 font-light">Recently added shirts!</p>
      </div>
      <div
        class="mt-[100px] flex flex-wrap justify-between space-x-5 px-10 w-full"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @addingToCart="handleAddToCart(product)"
        />
      </div>
      <div
        class="mt-[90px] flex flex-row justify-between space-x-5 px-10 w-full"
      >
        <div class="flex flex-row space-x-[20px]">
          <div class="text-blue-600 text-2xl">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div class="flex flex-col">
            <h1 class="font-extrabold text-xl tracking-wider">Free Shipping</h1>
            <p class="text-gray-600 w-[220px] tracking-wide mt-[15px]">
              Enjoy free shipping on all orders above $100
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-[20px]">
          <div class="text-blue-600 text-2xl">
            <i class="fa-solid fa-arrows-spin"></i>
          </div>
          <div class="flex flex-col">
            <h1 class="font-extrabold text-xl tracking-wider">SUPPORT 24/7</h1>
            <p class="text-gray-600 w-[220px] tracking-wide mt-[15px]">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-[20px]">
          <div class="text-blue-600 text-2xl">
            <i class="fa-solid fa-arrow-rotate-left"></i>
          </div>
          <div class="flex flex-col">
            <h1 class="font-extrabold text-xl tracking-wider">
              30 DAYS RETURN
            </h1>
            <p class="text-gray-600 w-[220px] tracking-wide mt-[15px]">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-[20px]">
          <div class="text-blue-600 text-2xl">
            <i class="fa-solid fa-fingerprint"></i>
          </div>
          <div class="flex flex-col">
            <h1 class="font-extrabold text-xl tracking-wider">
              100% PAYMENT SECURE
            </h1>
            <p class="text-gray-600 w-[220px] tracking-wide mt-[15px]">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
      </div>

      <div
        class="h-[80vh] w-full flex flex-row mt-[100px] justify-between px-10"
      >
        <div
          class="bg-black w-[700px] h-[350px] text-white flex flex-row justify-center"
        >
          <div class="flex flex-col mt-[80px] items-center">
            <h1 class="text-2xl flex flex-row justify-center items-center">
              PEACE OF MIND
            </h1>
            <p class="mt-5 break-words w-[350px]">
              A one-stop platform for all your fashion needs,
              <span class="flex flex-row justify-center items-center">
                hassle-free. Buy with a peace of mind.</span
              >
            </p>
            <button
              class="flex flex-row justify-center items-center mt-5 bg-white w-[120px] h-[45px] text-blue-600 text-sm"
            >
              BUY NOW
            </button>
          </div>
        </div>

        <div
          class="bg-black w-[600px] h-[350px] text-white flex flex-row justify-center"
        >
          <div class="flex flex-col mt-[80px] items-center">
            <h1 class="text-2xl flex flex-row justify-center items-center">
              BUY 2 GET 1 FREE
            </h1>
            <p class="mt-5 break-words w-[350px]">
              End of season sale. Buy any 2 items of your
              <span class="flex flex-row justify-center items-center">
                choice and get 1 free.</span
              >
            </p>
            <button
              class="flex flex-row justify-center items-center mt-5 bg-white w-[120px] h-[45px] text-blue-600 text-sm"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { useCart } from "@/stores/CartStore";

export default {
  name: "Test",
  components: {
    ProductCard,
  },
  created() {},
  data() {
    return {
      products: [
        {
          id: 1,
          labelText: "Plain white shirt",
          price: "₦29.00",
          pictures: ["./src/assets/images/one.png"],
          button: "Add To Cart",
        },
        {
          id: 2,
          labelText: "Denim jacket",
          price: "₦69.00",
          pictures: ["./src/assets/images/thirteen.png"],
          button: "Add To Cart",
        },
        {
          id: 3,
          labelText: "Black polo shirt",
          price: "₦49.00",
          pictures: ["./src/assets/images/three.png"],
          button: "Add To Cart",
        },
        {
          id: 4,
          labelText: "Blue Sweatshirt",
          price: "₦79.00",
          pictures: ["./src/assets/images/four.png"],
          button: "Add To Cart",
        },
        {
          id: 5,
          labelText: "Blue Plain Shirt",
          price: "#89.00",
          pictures: ["./src/assets/images/two.png"],
          button: "Add To Cart",
        },
        {
          id: 6,
          labelText: "Dark Blue Shirt",
          price: "₦79.00",
          pictures: ["./src/assets/images/five.png"],
          button: "Add To Cart",
        },
        {
          id: 7,
          labelText: "Outcast T Shirt",
          price: "₦19.00",
          pictures: ["./src/assets/images/seven.png"],
          button: "Add To Cart",
        },
        {
          id: 8,
          labelText: "Polo Plain Shirt",
          price: "₦29.00",
          pictures: ["./src/assets/images/eight.png"],
          button: "Add To Cart",
        },
      ],
    };
  },
  props: {},
  methods: {
    handleAddToCart(product) {
      const cartStore = useCart();
      cartStore.addToCart(product);
      this.$router.push("/cart");
    },
  },
};
</script>

<style>
.first {
  background-image: url("@/assets/images/six.png");
}
</style>
