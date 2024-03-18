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
    increaseQty(index) {
      this.items[index].quantity++;
    },
    decreaseQty(index) {
      if (this.items[index].quantity <= 1) {
        return;
      } else {
        this.items[index].quantity--;
      }
    },
  },
});
