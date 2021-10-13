import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>Sign In</h2>
        <div>sign in with email and password</div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" label="Sign In">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              label="Google Sign In"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (user) => dispatch(emailSignInStart(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
