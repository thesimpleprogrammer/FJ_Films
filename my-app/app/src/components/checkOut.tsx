// "use client";

// import {CheckoutProvider} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import CheckoutForm from './checkOutForm';

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51S0XHRBK2ZmzWWF1Llev2pCCW9CY7HD4tkHU51yPrFIeSAnc4jgagCyj2x4M4LJSiyvSch3cS9MtQYZ3OoBunXOU00vEKeLi5u');

// const fetchClientSecret = () => {
//   return fetch('/create-checkout-session', {method: 'POST'})
//     .then((response) => response.json())
//     .then((json) => json.checkoutSessionClientSecret)
// };

// export default function CheckOut() {
//   return (
//     <>
//     <CheckoutProvider stripe={stripePromise} options={{fetchClientSecret}}>
//       <CheckoutForm />
//     </CheckoutProvider>
//     <div className='w-100 h-100 bg-rose-600'></div>
//     </>
//   );
// }
"use client";

import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
}
const stripePromise = loadStripe(publishableKey);

export default function Checkout() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div>
      <h1 className='text-white bg-rose-600'>Stripe Checkout Example</h1>
      <button onClick={handleCheckout} className='bg-white text-black px-3 py-2'>Checkout</button>
    </div>
  );
}