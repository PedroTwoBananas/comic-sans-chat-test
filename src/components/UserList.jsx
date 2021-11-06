import React, { useEffect } from "react";
import UserItem from "./UserItem";
import "../styles/UserList.css";
import { addUser, deleteUser } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import socket from "./socket";

const UserList = function (props) {


  const users = useSelector(state => {
    const {usersReducer} = state;
    return usersReducer.users;
  })
  const dispatch = useDispatch();

  // useEffect(()=> {
  //   socket.on("user_add", (user) => {dispatch(addUser(user))});
  //   socket.on('user_delete', (userDelete) => {dispatch(deleteUser(userDelete))})
  // },[])
  
  return (
    <div className="user-list">
      <ul>
      {!!users.length && users.map(res => {
          return <UserItem  key={res.id} data={res}/>
        })}
      </ul>
    </div>
  );
};

export default UserList;
