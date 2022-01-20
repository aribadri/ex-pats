/* eslint-disable import/no-relative-packages */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLibrary from '../ChatLibrary/ChatLibrary';
import FeedBackItem from '../feedBackItem/FeedBackItem';

function FeedBackList({ user }) {
  const userChat = useSelector((state) => state.user.userData);

  return (
    <div>
      {
        user.map((el) => <FeedBackItem key={el.id} el={el} />)
      }
      {/* <ChatLibrary userChat={userChat} /> */}
    </div>
  );
}

export default FeedBackList;
