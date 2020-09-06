import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  clearError,
  clearMessage,
  loadingStop,
  setError,
  signUp,
} from "../actions";
import { errorMessageAlert, successMessageAlert } from "../helpers";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    };
    this.formRef = createRef();
  }

  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
  }

  // showing notifications
  componentDidUpdate() {
    const { error, dispatch, message } = this.props;
    if (error != null) {
      errorMessageAlert(error.title, error.detail);
      dispatch(clearError());
      this.formRef.current.reset();
    }
    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
      this.formRef.current.reset();
    }
  }

  checkForEmpty = () => {
    const { email, name, password, confirmPassword } = this.state;
    const { dispatch } = this.props;
    if (email.length === 0) {
      dispatch(setError("Missing Field", "Please Enter Email"));
      return;
    } else if (name.length === 0) {
      dispatch(setError("Missing Field", "Please Enter Name"));
      return;
    } else if (password.length === 0) {
      dispatch(setError("Missing Field", "Please Enter Password"));
      return;
    } else if (confirmPassword.length === 0) {
      dispatch(setError("Missing Field", "Please Enter Confirm Password"));
      return;
    } else if (password !== confirmPassword) {
      dispatch(setError("Password Error", "Passwords are not same"));
      return;
    }
    return true;
  };

  handleChange = (label, value) => {
    if (label === "email") {
      this.setState({ email: value });
    } else if (label === "name") {
      this.setState({ name: value });
    } else if (label === "password") {
      this.setState({ password: value });
    } else if (label === "confirmPassword") {
      this.setState({ confirmPassword: value });
    }
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    let checkForEmpty = this.checkForEmpty();
    if (checkForEmpty) {
      this.props.dispatch(signUp(this.state));
    }
  };

  render() {
    const { email, name, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-contaier">
        <div className="heading">Sign Up</div>
        <form ref={this.formRef}>
          <div className="input-container">
            <div>Email:</div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                this.handleChange("email", e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <div>Name:</div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                this.handleChange("name", e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <div>Password:</div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                this.handleChange("password", e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <div>Confirm Password:</div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                this.handleChange("confirmPassword", e.target.value);
              }}
            />
          </div>
          <button onClick={this.handleSubmitButton}>Register</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.alert.message,
    error: state.alert.error,
  };
}

export default connect(mapStateToProps)(SignUp);
