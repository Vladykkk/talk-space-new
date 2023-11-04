import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

import "../assets/css/AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <section className="authWrapper">
      <header className="headerContainer">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </header>
      <main className="authContainer">{children}</main>
    </section>
  );
};

export default AuthLayout;
