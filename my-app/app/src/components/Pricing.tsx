// components/PricingPlans.tsx

import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    features: [
      "Access to core features",
      "Email support",
      "1GB storage"
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    features: [
      "Everything in Basic",
      "Priority support",
      "10GB storage",
      "Custom integrations"
    ],
    highlighted: true, // Stand-out middle plan
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Unlimited storage",
      "Advanced analytics"
    ],
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-12">Choose the plan that fits your needs</p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 shadow-md transition-transform ${plan.highlighted ? `scale-110 hover:scale-115` : `hover:scale-105`} ${
                plan.highlighted
                  ? "bg-white border-2 border-indigo-500"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-indigo-600">
                {plan.price}
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
                className={`mt-6 w-full py-2 rounded-lg font-semibold transition-colors hover:cursor-pointer ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
