import React, { useEffect } from "react";
import ChatItem from './ChatItem';
import "../styles/ChatList.css";
import { addMessage } from "../redux/actions";
import {useSelector, useDispatch} from 'react-redux';
import socket from "./socket";


function ChatList(props) {

  

  const comments = useSelector(state => {
    const {inputReducer} = state;
    return inputReducer.comments;
  })

  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   socket.on("message_add", (message) => {dispatch(addMessage(message))});
  // },[]);
  

  

console.log('comments ', comments)
  return (
    <div className="chat-list">
      <ul>
        
        {comments.map(res => {
          return <ChatItem  key={res.idMessage} data={res} />
        })}
      </ul>
    </div>
  );
}

export default ChatList;
