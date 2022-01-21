/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ChatLibrary from '../ChatLibrary/ChatLibrary';

function Chat() {
  const { id } = useParams();
  console.log(id);
  const fromUser = useSelector((state) => state.user.userData);
  console.log(fromUser);
  const [toUserChat, setToUserChat] = useState([]);
  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get(`http://localhost:5000/api/users/${id}/chat`);
      console.log(data);
      setToUserChat(data);
    }
    getUser();
  }, [id]);
  console.log(toUserChat);
  self.addEventListener('push', (event) => {
    if (event.data) {
      console.log('This push event has data: ', event.data.text());
    } else {
      console.log('This push event has no data.');
    }
  });
  return (
    <div>
      {(fromUser && toUserChat)
        ? <ChatLibrary toUser={toUserChat} fromUser={fromUser} /> : 'loading...'}
    </div>
  );
}

export default Chat;
