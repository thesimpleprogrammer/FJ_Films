import { EmbeddedCheckout, useCheckout } from "@stripe/react-stripe-js";
// import { FormEvent } from "react";

const CheckoutForm = () => {
//   const checkout = useCheckout();

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     const result = await checkout.confirm();

//     if (result.type === "error") {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

  return (
    <div className="w-[50vh] max-w-md mx-auto h-[50vh] bg-blue-600">
      {/* <form onSubmit={(event) => handleSubmit(event)}> */}
        <EmbeddedCheckout />
        {/* <button>Submit</button>
      </form> */}
    </div>
  );
};

export default CheckoutForm;
