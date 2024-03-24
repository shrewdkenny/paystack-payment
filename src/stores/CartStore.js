import { defineStore } from "pinia";

export const useCart = defineStore("CartStore", {
  state: () => ({
    items: [],
    count: 0,
  }),
  actions: {
    addToCart(product) {
      const existingProductIndex = this.items.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        return false;
      }

      this.items.push({ ...product, quantity: 1, initialPrice: product.price });
      this.count++;
      return true;
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
    clearCart() {
      this.items.splice(0, this.items.length);
      this.count = 0;
    },
  },
});
