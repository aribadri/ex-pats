/* eslint-disable import/no-relative-packages */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ChatLibrary from '../ChatLibrary/ChatLibrary';
import FeedBackItem from '../feedBackItem/FeedBackItem';

function FeedBackList({ user }) {
  const userChat = useSelector((state) => state.user.userData);

  return (
    <div className="container-feedback">
      <div className="header-feedback">Отзывы:</div>
      <div className="list-feedback">
        {
        user.map((el) => <FeedBackItem key={el.id} el={el} user={user} />)
      }
        {/* <ChatLibrary userChat={userChat} /> */}
      </div>

    </div>
  );
}

export default FeedBackList;
