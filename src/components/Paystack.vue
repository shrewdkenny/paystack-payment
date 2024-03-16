<template>
  <div>
    <button
      @click="initializePayment"
      class="bg-black text-white font-bold py-2 px-4 rounded mt-10"
    >
      proceed to payment
    </button>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const initializePayment = () => {
      if (typeof window.PaystackPop !== "undefined") {
        const handler = window.PaystackPop.setup({
          key: "pk_test_45bea0e6f89e6dca5b5776a0715d360a3e72f1ee",
          email: "Shrewdkenny@gmail.com",
          amount: props.amount * 100,
          ref: props.reference,
          currency: "NGN",
        });
        handler.openIframe();
      } else {
        console.error("Paystack SDK not loaded");
      }
    };

    return {
      initializePayment,
    };
  },
};
</script>
