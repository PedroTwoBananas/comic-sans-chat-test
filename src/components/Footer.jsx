import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Footer.css";
import uniqid from "uniqid";
// import { messageCreate } from "../redux/actions";
import socket from "./socket";

function Footer(props) {
  const [textMessage, setTextMessage] = useState("");
  const [imageMessage, setImageMessage] = useState();

  const myUser = useSelector((state) => {
    const { myUserReducer } = state;
    return myUserReducer.myUser;
  });

  const dispatch = useDispatch();

  const handleImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      console.log(reader.result);
      setImageMessage(reader.result);
    };
    setImageMessage((e.target.value = null));
  };

  const handleInput = (e) => {
    setTextMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const idMessage = uniqid();
    const myUserId = myUser.id;
    const myUserName = myUser.fullName;
    const myUserImage = myUser.userImage;

    socket.emit("message", {
      textMessage,
      idMessage,
      myUserId,
      myUserName,
      myUserImage,
      imageMessage,
    });
    // dispatch(
    //   messageCreate(
    //     textMessage,
    //     idMessage,
    //     myUser.id,
    //     myUser.name,
    //     myUser.userImage,
    //     imageMessage
    //   )
    // );
    setTextMessage("");
    setImageMessage("");
  };

  return (
    <div className="footer">
      <div className="footer-image-block">
        <label for="buttomImage" className="footer-image-label">
          <span className="footer-image-text">📎</span>
        </label>
        <input
          id="buttomImage"
          className="footer-image-button"
          type="file"
          src={imageMessage}
          onChange={handleImage}
          accept="image/*"
        />
      </div>
      <div className="footer-input-block">
        <input
          className="footer-input"
          type="text"
          placeholder="Введите сообщение"
          value={textMessage}
          onInput={handleInput}
        />
      </div>
      <div className="footer-submit-block">
        <button className="footer-submit-button" onClick={handleClick}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default Footer;
