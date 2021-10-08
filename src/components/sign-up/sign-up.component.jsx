import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import { signUpStart } from "../../redux/user/user.actions.js";
import { connect } from "react-redux";
import CustomButton from "../../custom-button/custom-button.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { email, password, displayName, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    signUpStart({ email, password, displayName });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="SignUp">
        <h2>Sign Up </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="display name"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
          />

          <FormInput
            name="email"
            label="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
          />
          <FormInput
            name="password"
            label="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
          />

          <FormInput
            name="confirmPassword"
            label="confirm password"
            type="password"
            handleChange={this.handleChange}
            value={confirmPassword}
          />
          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: ({ email, password, displayName }) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
