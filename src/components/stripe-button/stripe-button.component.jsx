import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JTLWGC0GdYSx4D8aYBluYJbipan7MeNtiz0LAPrW8oLx7d0jGg1yGLtMNyeATsbp7BKvnEJ6LRjzh2z65dBZGup004Q7d6kQL";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Online Garage Sale"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
