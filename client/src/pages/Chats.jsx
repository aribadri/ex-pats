import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatLibrary from '../components/ChatLibrary/ChatLibrary';

function Chats() {
  const fromUser = useSelector((state) => state.user.userData);
  console.log(fromUser);

  return (
    <div>
      <ChatLibrary toUser={fromUser} fromUser={fromUser} />
    </div>
  );
}

export default Chats;
