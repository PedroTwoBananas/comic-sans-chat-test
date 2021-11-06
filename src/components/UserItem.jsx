import React from "react";
import '../styles/UserItem.css';


function UserItem({data}) {
    const {socketId, fullName, id, userImage } = data;

  return (
    <li className='user-item'>
      <div className='user-item-block'>
        <img className='user-item-image' src={userImage}/>
        <span className='user-item-name'>{fullName}</span>
      </div>
    </li>
  );
}

export default UserItem;
