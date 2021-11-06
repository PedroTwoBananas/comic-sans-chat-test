import React, { useEffect } from "react";
import info from "../info";
import { firstName, lastName } from "../names";
import {
  addMessage,
  deleteMessage,
  addUser,
  imageLoad,
  myUserCreate,
  deleteUser,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { io } from "socket.io-client";
import "../styles/Landing.css";

function Landing(props) {
  const url = info.url;

  const dispatch = useDispatch();

  const myImage = useSelector((state) => {
    const { imageReducer } = state;
    return imageReducer.myImage;
  });

  useEffect(() => {
    dispatch(imageLoad());
  }, []);

  const goToChat = () => {
    const firstUserName =
      firstName[Math.floor(Math.random() * firstName.length)];
    const lastUserName = lastName[Math.floor(Math.random() * lastName.length)];
    const fullName = firstUserName + lastUserName;
    const userImage = myImage;
    const id = uniqid();
    const socket = io();
    socket.emit("user", { id, fullName, userImage });
    dispatch(myUserCreate(id, fullName, userImage));
    socket.on("user_add", (user) => {
      dispatch(addUser(user));
    });
    socket.on("user_delete", (userDelete) => {
      dispatch(deleteUser(userDelete));
    });
    socket.on("message_add", (message) => {
      dispatch(addMessage(message));
    });
    socket.on("deleted_message", (deletedMessage) =>
      dispatch(deleteMessage(deletedMessage))
    );
    props.history.push("/" + url);
  };
  return (
    <div className="welcome">
      <div className='welcome-block'>
        <h1 className="welcome-title">Начнем?</h1>
        <button className='welcome-button' onClick={goToChat}>Да</button>
      </div>
    </div>
  );
}

// class Landing extends React.Component {
//   state = {
//     url: info.url
//   };

//   goToChat = () => {
//     const urlChat = this.state.url;
//     this.props.history.push('/'+ urlChat);
//   }
//   render() {
//   return (
//     <div>
//       <h1>Начнем?</h1>
//       <button onClick={this.goToChat}>Да</button>
//     </div>
//   );
//   }
// };

export default Landing;
