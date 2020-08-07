import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './StripeButton.scss';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HDRhsG62N4nd57hkSodXb7az2CJiPvMBglCTrYsVvTs08dopX5M3LguWAgj0mXUUwCfDLe1Sx5YHA5kdlF28jJL00NsPiuQ51';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment sucessful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please use the provided credit card.'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabe="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
