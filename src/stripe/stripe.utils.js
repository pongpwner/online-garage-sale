import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51JTLWGC0GdYSx4D8aYBluYJbipan7MeNtiz0LAPrW8oLx7d0jGg1yGLtMNyeATsbp7BKvnEJ6LRjzh2z65dBZGup004Q7d6kQL"
  //process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
