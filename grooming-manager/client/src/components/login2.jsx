import React from "react";
import { Link } from "react-router-dom";
/* import Register from "./register"; */

const Login = () => {
  return (
    <div>
      <div className="login-form">
        <h1 className="login-header">Login</h1>
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
            <div>
              <input id="remember-me-checkbox" type="checkbox" name="" />
              <label htmlFor="remember-me-checkbox">Remember me</label>
            </div>
            <span>Forgot Password?</span>
          </div>
          <button id="submit-button" type="submit">
            Login
          </button>
          <div>
            <span>
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
