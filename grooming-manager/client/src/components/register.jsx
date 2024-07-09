import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="login-form">
        <h1 className="login-header">Register</h1>
        <form action="" method="" id="login-form">
          <div>
            <input id="email-input" type="email" placeholder="email address" />
            <label htmlFor="email-input"></label>
          </div>
          <div>
            <input id="password-input" type="password" placeholder="password" />
            <label htmlFor="password-input"></label>
          </div>
          <div>
            <input
              id="retype-password-input"
              type="password"
              placeholder="confirm password"
            />
            <label htmlFor="retype-password-input"></label>
          </div>

          <button id="submit-button" type="submit">
            Register
          </button>
          <div>
            <span>
              Already have an account?{" "}
              <Link to="/login">Login to your account</Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
