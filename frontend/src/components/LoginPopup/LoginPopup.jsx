import React, { useState } from "react";
import "./LoginPopUp.css";
import CloseIcon from "@mui/icons-material/Close";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <CloseIcon
            className="close-icon"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your Name" />
          )}

          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>
          {currentState === "Sign up" ? "Create a account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" id="rememberMe" name="rememberMe" required />
          {currentState === "Login" ? (
            <p>
              create a new account ?{" "}
              <span onClick={() => setCurrentState("Sign up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
