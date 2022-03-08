import React from "react";
import logo from "../../../Data/Assets/Logo/logo.svg";
import { useModal } from "../../Context/ModalContext";
import "./Navbar.css";

const Navbar = () => {
  const {
    showLoginModal,
    setShowLoginModal,
    setShowSignupModal,
    loginButton,
    setLoginButton,
  } = useModal();

  const onNavbarLoginClickHandler = () => {
    if (loginButton === "Login") {
      setShowLoginModal(true);
      setShowSignupModal(false);
    } else {
      setLoginButton("Login");
      setShowLoginModal(false);
      setShowSignupModal(false);
    }
  };

  return (
    <div className="desktop-navigation-bar">
      <a href="/">
        <img className="company-logo" src={logo} alt="logo" />
      </a>
      <div className="outline-search-input">
        <label>
          <div className="input-icon">
            <a href="">
              <i className="fas fa-search"></i>
            </a>
            <input type="search" name="search" placeholder="Search" />
          </div>
        </label>
      </div>
      <div className="nav-bar-btns">
        <button
          onClick={onNavbarLoginClickHandler}
          className="btn primary-btn-md"
        >
          {loginButton}
        </button>
        <div className="badge-container">
          <button className="btn badge-icon-btn-md">
            <i className="far fa-heart">
              <span className="badge-on-icon">2</span>
            </i>
          </button>
        </div>
        <div className="badge-container">
          <button className="btn badge-icon-btn-md">
            <i className="fas fa-shopping-cart">
              <span className="badge-on-icon">0</span>
            </i>
          </button>
        </div>
        <div className="avatar text-avatar-xsm-round">IN</div>
      </div>
    </div>
  );
};
export default Navbar;
