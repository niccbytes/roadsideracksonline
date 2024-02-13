// StripeButton.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51OhiPoA5mRJyJckoSRVBRVKiSmWGoko4BzJzoYkXks7GFkGcBMzRwrCbQEcMprQmwvNtdbqOWxbPS4nVpc49fcQL00Sd7D7wyb');

const StripeButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1OjAMnA5mRJyJckoMkVK0DWO', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://yourwebsite.com/success',
      cancelUrl: 'https://yourwebsite.com/cancel',
    });
    
    if (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>
      Pay Now
    </button>
  );
};

export default StripeButton;
