import { createRouter, createWebHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import CartPage from "../views/CartPage.vue";
import Paystack from "../components/Paystack.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FirstPage",
      component: FirstPage,
    },

    {
      path: "/cart",
      name: "Cart",
      component: CartPage,
    },
    {
      path: "/payStack",
      name: "PayStack",
      component: Paystack,
    },
  ],
});

export default router;
