import React from "react";
import { Link } from "react-router-dom";

import items from "./items";

import "../../assets/css/pagesWrapper.css";

import Logo from "../../assets/img/logo.svg";

import exit from "../../assets/img/menu/exit.svg";

const PagesWrapper = ({ children }) => {
  const elements = items.map(({ id, link, pictureSrc, text }) => (
    <li key={id} className="menuItem">
      <Link className="menuLink" to={link}>
        <img className="linkIcon" src={pictureSrc} alt={text} />
        <span className="menulinktext">{text}</span>
      </Link>
    </li>
  ));

  console.log(items);

  return (
    <div className="pageWrapper">
      <div className="sideMenu">
        <div className="menuBlock">
          <Link className="logowrap" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="itemsList">{elements}</ul>
        </div>

        <div className="exitBlock">
          <Link className="exitBlockLink" to="/">
            <img className="exitBlockLinkIcon" src={exit} alt="logo" />
            <span className="exitBlockLinkText">Вихід</span>
          </Link>
        </div>
      </div>
      <div className="contentWrapper">{children}</div>
    </div>
  );
};

export default PagesWrapper;
