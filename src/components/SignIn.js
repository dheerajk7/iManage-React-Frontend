import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="sign-up-contaier">
          <div className="heading">Sign In</div>
          <form>
            <div className="input-container">
              <div>Email:</div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <div>Password:</div>
              <input type="text" placeholder="Password" />
            </div>

            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
