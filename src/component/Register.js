import React from "react";
import "./signup.css";
function Register() {

  return (
    <div className="register-main-container">
      <form>
        <label>
          Enter your First Name:
          <input id="first" name="first" type="first" />
        </label>
        <label>
          Enter your Last Name:
          <input name="" type="text" />
        </label>

        <label>
          Enter your Email: <input name="" type="" />
        </label>

        <label>
          Enter password: <input name="" type="" />
        </label>

        <label>
          Enter your Role ID:
          <input name="" type="" />
        </label>

      </form>
    </div>
  );
}
export default Register;
