import React from 'react'
import {INITIATE_CHECKOUT_MUTATION} from '../utils/mutations'
import { useMutation } from '@apollo/client';

const Checkout = () => {
  const [initiateCheckout] = useMutation(INITIATE_CHECKOUT_MUTATION);

  const handleBuy = async () => {
    try {
      const { data } = await initiateCheckout({
        variables: {
          input: {
            // Pass any necessary data like item details, quantity, etc.
          }
        }
      });

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({ sessionId: data.initiateCheckout.sessionId });
      if (result.error) {
        console.error('Error redirecting to checkout:', result.error);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
  };
  return (
    <div>Checkout
      <button onClick={handleBuy}>CLICK</button>
    </div>
  )
}

export default Checkout