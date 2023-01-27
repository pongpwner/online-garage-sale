
# online-garage-sale
This is a practice [ecommerce website]. 

## Features
* sort items by categories
* add items to cart
* edit number of items from cart

## Built With
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Sagas](https://redux-saga.js.org/)
* [Reselect](https://github.com/reduxjs/reselect)
* [firebase](https://firebase.google.com/)
* [Stripe Payments](https://stripe.com/payments)
* [SASS](https://sass-lang.com/)


## What I Learned
* I got a lot of practice building resuable components with React.
* I used SCSS to make styling components easier.
* I use redux to store the cart, user data, and shop data.  Using redux allows these states to be accessible in any component.
* I learned a lot about sagas building this project.  I learned about the factory function and how it yields.  Sagas is very useful for calling different combinations of actions.  One example of this is dispatching the userSignIn action in a saga after the userSignUp action is dispatched.
* I learned how to authenticate users with firebase, and how to store data in firestore.
* I used the stripe payments api to build the ui for the payments section.

## Acknowledgements
[complete-react-developer-zero-to-mastery](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) - this project is based of lessons from this course
## Contact
* [portfolio](https://pongpwner.github.io/eric-shyu-portfolio/) 
* [linkedin](https://www.linkedin.com/in/eric-shyu-105a84191/)
