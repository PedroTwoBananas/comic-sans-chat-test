import React from "react";
import { useSelector } from "react-redux";
import "../styles/Header.css";

const Header = function (props) {
  // const { name, id, userImage } = data;
  const myUser = useSelector((state) => {
    const { myUserReducer } = state;
    return myUserReducer.myUser;
  });

  return (
    <div className="header">
      <img
        className="header-user-image"
        src={myUser.userImage}
        alt="Пользователь"
      />
      <span className="header-user-name">{myUser.fullName}</span>
      <span className='header-title'>Comic Sans Chat</span>
    </div>
  );
};
export default Header;
