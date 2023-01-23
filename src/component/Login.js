import React from "react";
import "./login.css";
function Login() {
  return (
    <>
      <div className="login-main-container">
        <h1 className="login-heading">Login</h1>
        <div className="login-page-main">
          <div className="login-first">
            <label>
              Enter your email:
              <input type="text" name="username" />
              <hr></hr>
            </label>
          </div>
          <div className="login-second">
            <label>
              Enter your password:
              <input type="number" name="pasword" />
            </label>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
