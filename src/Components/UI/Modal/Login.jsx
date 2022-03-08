import React, { useState } from "react";
import { useModal } from "../../Context/ModalContext";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Login.css";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const {
    showLoginModal,
    setShowLoginModal,
    showSignupModal,
    setShowSignupModal,
    loginButton,
    setLoginButton,
  } = useModal();

  const onLoginSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onModalInputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputField((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const onLoginCLickFormHandler = () => {
    if (inputField.name === "" || inputField.password === "") {
      return;
    } else {
      setLoginButton("Logout");
      setShowLoginModal(false);
      setShowSignupModal(false);
    }
  };

  return (
    <>
      <div className="signin-modal">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your account</p>
        <a
          onClick={() => {
            setShowLoginModal(false);
            setShowSignupModal(false);
          }}
        >
          <i className="fas fa-times"></i>
        </a>
        <form onSubmit={onLoginSubmitHandler}>
          <Input
            type="email"
            name="email"
            required="required"
            autoComplete="email"
            placeholder="Enter your email *"
            iconWrapper="input-icon"
            icon="far fa-envelope"
            outline="outline-email-input"
            onChange={onModalInputHandler}
            value={inputField.email}
          />
          <Input
            type="password"
            name="password"
            required="required"
            autoComplete="current-password"
            placeholder="Enter your password *"
            iconWrapper="input-icon"
            icon="fas fa-key"
            outline="outline-password-input"
            onChange={onModalInputHandler}
            value={inputField.password}
          />
          <Button
            btn="signin-btn"
            type="submit"
            label="Sign In"
            className="btn primary-btn-md"
            onClick={onLoginCLickFormHandler}
          />
          <p>
            Forgot your password?{" "}
            <span>
              <a> Reset Password </a>
            </span>
          </p>

          <a
            className="createAccountBtn"
            onClick={() => {
              setShowLoginModal(false);
              setShowSignupModal(true);
            }}
          >
            <h2>
              Create New Account <i className="fas fa-angle-right"></i>
            </h2>
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
