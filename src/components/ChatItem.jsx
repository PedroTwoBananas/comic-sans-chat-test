import React from "react";
import "../styles/ChatItem.css";
import { deleteMessage } from "../redux/actions";
import { useDispatch } from "react-redux";
import socket from './socket';

function ChatItem({ data }) {
  const { textMessage, idMessage, myUserId, myUserName, myUserImage, imageMessage } = data;

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    socket.emit('message_delete', {idMessage, myUserId});
    socket.on("deleted_message", (deletedMessage) =>
      dispatch(deleteMessage(deletedMessage))
    );
    // socket.on("message_add", (message) => dispatch(addMessage(message)))
    // dispatch(messageDelete(idMessage));
  };

  return (
    <li className="chat-item">
      <div className="chat-item-block">
        <div className="chat-item-user">
          <div className="chat-item-user-info">
            <img className="chat-item-user-image" src={myUserImage} />
            <span className="chat-item-user-name">{myUserName}:</span>
          </div>
          <button className="chat-item-delete" onClick={handleDelete}>
            &times;
          </button>
        </div>

        <div className="chat-item-message">
          {imageMessage ? (
            <img className="chat-item-message-image" src={imageMessage} />
          ) : null}
          {/* <img className="chat-item-message-image" src={image}   /> */}
          <span className="chat-item-message-text"> {textMessage} </span>
        </div>
      </div>
    </li>
  );
}

export default ChatItem;
