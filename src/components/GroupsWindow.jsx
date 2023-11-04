import React from "react";

import "../assets/css/groupsWindow.css";

import UserEmptyPicture from "../assets/img/menu/user-empty.png";

const GroupsWindow = ({ children }) => {
  return (
    <div className="window">
      <div className="dots">
        <button>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
      </div>
      <div className="info">
        <p>Group Name</p>
        <p>Users Quantity</p>
        <div className="users">
          <img src={UserEmptyPicture} alt="User picture" />
          <img src={UserEmptyPicture} alt="User picture" />
          <img src={UserEmptyPicture} alt="User picture" />
          <img src={UserEmptyPicture} alt="User picture" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default GroupsWindow;
