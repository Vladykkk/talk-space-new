import React from "react";

import "../assets/css/button.css";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
