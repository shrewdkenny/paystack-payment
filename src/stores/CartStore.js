import { defineStore } from "pinia";
export const useCart = defineStore("CartStore", {
  state: () => ({
    items: [],
    count: 0,
    quantity: 1,
  }),
  actions: {
    addToCart(product) {
      this.items.push(product);
      this.count++;
    },
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity <= 1) {
        return null;
      } else {
        this.quantity--;
      }
    },
  },
});
