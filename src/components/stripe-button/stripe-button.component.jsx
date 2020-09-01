import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HMSu9HcLvKZJ4gCv6REcY7cFu9alYBNWwLdpIB3D0YYO9oFNIuCpI4RQJQUgJHKiNtl7gjj9xExg5c7sVOKuNYf00MxbYnJM3';

 const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };
  
   return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;