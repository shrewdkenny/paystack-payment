<template>
  <main class="h-screen w-full bg-[#ffff]">
    <section
      class="bg-[url('@/assets/images/six.png')] bg-cover h-[50vh] lg:py-[100px] lg:bg-cover bg-no-repeat flex flex-col lg:justify-end items-end lg:w-full lg:h-[80vh]"
    >
      <div class="w-[500px] mb-[300px]">
        <h1
          class="hidden lg:text-5xl text-white font-mono font-semibold mb-[20px]"
        >
          STYLIST PICKS BEAT THE HEAT
        </h1>
        <button
          class="hidden lg:text-xl text-white font-medium border-white border-[3px] ml-[50px]"
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

      <div class="mt-10 lg:mt-[100px] px-5 w-full">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @addingToCart="handleAddToCart(product)"
          />
        </div>
      </div>

      <div
        class="flex-col gap-2 mt-20 lg:mt-[90px] flex lg:flex-row justify-between space-x-5 px-10 w-full h-40"
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
    </div>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { useCart } from "@/stores/CartStore";
import Swal from "sweetalert2";
import oneImage from "@/assets/images/one.png";
import twoImage from "@/assets/images/two.png";
import threeImage from "@/assets/images/three.png";
import fourImage from "@/assets/images/four.png";
import fiveImage from "@/assets/images/five.png";
import sevenImage from "@/assets/images/seven.png";
import eightImage from "@/assets/images/eight.png";
import thirteenImage from "@/assets/images/thirteen.png";

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
          price: "1000.00",
          pictures: [oneImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 2,
          labelText: "Denim jacket",
          price: "3000.00",
          pictures: [thirteenImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 3,
          labelText: "Black polo shirt",
          price: "1200.00",
          pictures: [threeImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 4,
          labelText: "Blue Sweatshirt",
          price: "1000.00",
          pictures: [fourImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 5,
          labelText: "Blue Plain Shirt",
          price: "2400.00",
          pictures: [twoImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 6,
          labelText: "Dark Blue Shirt",
          price: "1300.00",
          pictures: [fiveImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 7,
          labelText: "Outcast T Shirt",
          price: "1500.00",
          pictures: [sevenImage],
          button: "Add To Cart",
          quantity: 1,
        },
        {
          id: 8,
          labelText: "Polo Plain Shirt",
          price: "2000.00",
          pictures: [eightImage],
          button: "Add To Cart",
          quantity: 1,
        },
      ],
      showAlert: true,
    };
  },
  props: {},
  methods: {
    handleAddToCart(product) {
      const cartStore = useCart();
      const isProductAdded = cartStore.addToCart(product);

      if (!isProductAdded) {
        Swal.fire({
          imageUrl:
            "https://www.shutterstock.com/image-vector/no-sign-empty-red-crossed-600nw-770473612.jpg",
          position: "top-end",
          width: "200px",
          height: "10px",
          imageHeight: "50px",
          color: "black",
          title:
            "<span style='font-size: 20px; font-family: sans-serif;'>already in cart</span>",
          showConfirmButton: false,
          timer: 500,
        });
        return;
      }

      if (this.showAlert) {
        Swal.fire({
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlP8OJ8McU0-mWFp9sn5HBUlu_bTLXuMoldMX3og4YA&s",
          position: "top-end",
          width: "200px",
          height: "10px",
          imageHeight: "80px",
          color: "black",
          title:
            "<span style='font-size: 20px; font-family: sans-serif;'>added to cart</span>",
          showConfirmButton: false,
          timer: 500,
        });
      }
    },
  },
};
</script>
