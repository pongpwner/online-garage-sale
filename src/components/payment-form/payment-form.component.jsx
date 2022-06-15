import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./payment-form.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payments-intent", {
      method: "post",
      headers: {
        Content_Type: "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response);
    const clientSecret = response.paymentIntent.client_secret;
    console.log(clientSecret);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "guest",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error + "error");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  };
  return (
    <div>
      <form onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <CustomButton disabled={isProcessingPayment}> Pay now</CustomButton>
      </form>
    </div>
  );
};
const mapStateToProps = () => {};
export default PaymentForm;
