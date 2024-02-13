import {gql} from '@apollo/client'
export const INITIATE_CHECKOUT_MUTATION = gql`
  mutation InitiateCheckout($input: CheckoutInput!) {
    initiateCheckout(input: $input) {
      sessionId
    }
  }
`;

//poop