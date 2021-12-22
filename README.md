
# online-garage-sale
This is a practice ecommerce website.  The goal is to create a site for myself to sell personal items.

technologies used: scss, react, redux, redux sagas, reselect, react router, firebase, stripe payments.

# What I Learned
I got a lot of practice building resuable components with React.
I used SCSS to make styling components easier.
I use redux to store the cart, user data, and shop data.  Using redux allows these states to be accessible in any component.
I learned a lot about sagas building this project.  I learned about the factory functin and how it yields.  Sagas is very useful for calling different combinations of actions.  One example of this is dispatching the userSignIn action in a saga after the userSignUp action is dispatched.
I learned how to authenticate users with firebase, and how to store data in firestore.
I used the stripe payments api to build the ui for the payments section.  Still need to add backend to accept payments.