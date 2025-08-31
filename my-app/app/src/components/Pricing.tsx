// components/PricingPlans.tsx
"use client";

import { Check } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}
const stripePromise = loadStripe(publishableKey);

const plans = [
  {
    name: "Basic",
    price: 9,
    period: "/month",
    features: ["Access to core features", "Email support", "1GB storage"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    period: "/month",
    features: [
      "Everything in Basic",
      "Priority support",
      "10GB storage",
      "Custom integrations",
    ],
    highlighted: true, // Stand-out middle plan
  },
  {
    name: "Premium",
    price: 59,
    period: "/month",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Unlimited storage",
      "Advanced analytics",
    ],
    highlighted: false,
  },
];

export default function PricingPlans() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (price: number) => {
    setLoading(true);
    setPrice(price);
    console.log("Selected price:", price);

    const stripe = await stripePromise;
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemPrice: price * 100,
      }),
    });
    const session = await response.json();
    setLoading(false);
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <section className="bg-gray-100 py-32 px-10" id="Pricing">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-12">
          Choose the plan that fits your needs
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 shadow-md transition-transform ${
                plan.highlighted
                  ? `scale-110 hover:scale-115`
                  : `hover:scale-105`
              } ${
                plan.highlighted
                  ? "bg-white border-2 border-indigo-500"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-indigo-600">
                {`$${plan.price}`}
                <span className="text-base font-normal text-gray-500">
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  handleCheckout(plan.price);
                }}
                className={`mt-6 w-full py-2 rounded-lg font-semibold transition-colors hover:cursor-pointer ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {loading && !plan.highlighted && price === plan.price && (
                  <span className="w-6 h-6 inline-block align-middle mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <radialGradient
                      id="a11"
                      cx=".66"
                      fx=".66"
                      cy=".3125"
                      fy=".3125"
                      gradientTransform="scale(1.5)"
                    >
                      <stop offset="0" stop-color="#4F39F6"></stop>
                      <stop
                        offset=".3"
                        stop-color="#4F39F6"
                        stop-opacity=".9"
                      ></stop>
                      <stop
                        offset=".6"
                        stop-color="#4F39F6"
                        stop-opacity=".6"
                      ></stop>
                      <stop
                        offset=".8"
                        stop-color="#4F39F6"
                        stop-opacity=".3"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#4F39F6"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <circle
                      transform-origin="center"
                      fill="none"
                      stroke="url(#a11)"
                      stroke-width="25"
                      stroke-linecap="round"
                      stroke-dasharray="200 1000"
                      stroke-dashoffset="0"
                      cx="100"
                      cy="100"
                      r="70"
                    >
                      <animateTransform
                        type="rotate"
                        attributeName="transform"
                        calcMode="spline"
                        dur="2"
                        values="360;0"
                        keyTimes="0;1"
                        keySplines="0 0 1 1"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </circle>
                    <circle
                      transform-origin="center"
                      fill="none"
                      opacity=".2"
                      stroke="#4F39F6"
                      stroke-width="25"
                      stroke-linecap="round"
                      cx="100"
                      cy="100"
                      r="70"
                    ></circle>
                  </svg>
                  </span>
                )}
                {loading && plan.highlighted && price === plan.price &&
                  <span className="w-6 h-6 inline-block align-middle mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      <radialGradient
                        id="a11"
                        cx=".66"
                        fx=".66"
                        cy=".3125"
                        fy=".3125"
                        gradientTransform="scale(1.5)"
                      >
                        <stop offset="0" stop-color="#F6F6F6"></stop>
                        <stop
                          offset=".3"
                          stop-color="#F6F6F6"
                          stop-opacity=".9"
                        ></stop>
                        <stop
                          offset=".6"
                          stop-color="#F6F6F6"
                          stop-opacity=".6"
                        ></stop>
                        <stop
                          offset=".8"
                          stop-color="#F6F6F6"
                          stop-opacity=".3"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="#F6F6F6"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                      <circle
                        transform-origin="center"
                        fill="none"
                        stroke="url(#a11)"
                        stroke-width="26"
                        stroke-linecap="round"
                        stroke-dasharray="200 1000"
                        stroke-dashoffset="0"
                        cx="100"
                        cy="100"
                        r="70"
                      >
                        <animateTransform
                          type="rotate"
                          attributeName="transform"
                          calcMode="spline"
                          dur="2"
                          values="360;0"
                          keyTimes="0;1"
                          keySplines="0 0 1 1"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                      <circle
                        transform-origin="center"
                        fill="none"
                        opacity=".2"
                        stroke="#F6F6F6"
                        stroke-width="26"
                        stroke-linecap="round"
                        cx="100"
                        cy="100"
                        r="70"
                      ></circle>
                    </svg>
                  </span>
                }
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
