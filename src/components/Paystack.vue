<template>
  <div>
    <button
      @click="initializePayment"
      class="h-[50px] w-[100%] rounded-none lg:w-[100%] bg-orange-400 text-white font-normal py-2 px-7 lg:rounded mt-10 mb-5"
    >
      Checkout
    </button>
  </div>
</template>

<script>
import { useCart } from "@/stores/CartStore";

export default {
  props: {
    amount: {
      type: Number,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const cartStore = useCart();

    const initializePayment = async () => {
      if (typeof window.PaystackPop !== "undefined") {
        const handler = window.PaystackPop.setup({
          key: "pk_test_45bea0e6f89e6dca5b5776a0715d360a3e72f1ee",
          email: "shrewdkenny@gmail.com",
          amount: props.amount * 100,
          currency: "NGN",
          callback: (response) => handlePaymentResponse(response),
          onClose: () => handleClose(),
        });

        if (handler.openIframe instanceof Function) {
          try {
            await handler.openIframe();
          } catch (err) {}
        } else {
        }
      } else {
        console.error("Paystack SDK not loaded");
      }
    };

    const handlePaymentResponse = (response) => {
      if (response && response.status === "success") {
        cartStore.clearCart();
      }
      props.callback(response);
    };

    const handleClose = () => {
      props.close();
    };

    return {
      initializePayment,
    };
  },
};
</script>
