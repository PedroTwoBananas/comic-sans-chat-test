import React, { useState } from "react";
import Header from "./Header";
import UserList from "./UserList";
import ChatList from "./ChatList";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/App.css";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import socket from "./socket";

function App(props) {
  const myUser = useSelector(state => {
    const {myUserReducer} = state;
    return myUserReducer.myUser;
  })
  const dispatch = useDispatch();
  // useEffect(()=> {
  //   socket.on("user_add", (user) => {dispatch(addUser(user))});
  // },[])


  return (
    <div className=".App">
      <Header />
      <div className="app-middle">
        <UserList />
        <ChatList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
