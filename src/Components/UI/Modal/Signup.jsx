import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import logo from "../../../Data/Assets/Logo/logo.svg";
import { useModal } from "../../Context/ModalContext";

const Signup = () => {
  const {
    showLoginModal,
    setShowLoginModal,
    showSignupModal,
    setShowSignupModal,
  } = useModal();

  return (
    <div className="signup-modal-one">
      <h1>Sign Up</h1>
      {/* <div className={classes.logoContainer}>
        <img src={logo} alt="logo" />
      </div> */}
      <p>Please provide your details.</p>
      <a
        onClick={() => {
          setShowLoginModal(false);
          setShowSignupModal(false);
        }}
      >
        <i className="fas fa-times"></i>
      </a>
      <form action="" method="post">
        <Input
          label="Full Name"
          type="text"
          name="text"
          required=""
          autoComplete="name"
          placeholder="Enter your name"
          iconWrapper=""
          icon=""
          outline="outline-text-input"
        />
        <Input
          label="Email *"
          type="email"
          name="email"
          required="required"
          autoComplete="email"
          placeholder="Enter your email *"
          iconWrapper=""
          icon=""
          outline="outline-email-input"
        />
        <Input
          label="Phone no"
          type="tel"
          name="tel"
          required=""
          autoComplete="tel"
          placeholder="Enter phone number"
          iconWrapper=""
          icon=""
          outline="outline-tel-input"
        />
        <Input
          label="Password *"
          type="text"
          name="password"
          required="required"
          autoComplete="current-password"
          placeholder="Enter your password"
          iconWrapper=""
          icon=""
          outline="outline-password-input"
        />

        <Input
          label="Re-enter Password *"
          type="password"
          name="password"
          required="required"
          autoComplete=""
          placeholder="Re-enter your password"
          iconWrapper=""
          icon=""
          outline="outline-password-input"
        />
        <p>
          By continuing you agree to our Terms of Service and
          <span>
            <a href=""> Privacy Policy</a>
          </span>
        </p>
        <Button
          btn="signup-btn"
          type="submit"
          className="btn primary-btn-md"
          label=" Sign Up"
        />
      </form>
    </div>
  );
};

export default Signup;
