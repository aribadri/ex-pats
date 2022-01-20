import React from 'react';
import FeedBackItem from '../feedBackItem/FeedBackItem';

function FeedBackList({ user }) {
  return (
    <div>
      {
        user.map((el) => <FeedBackItem key={el.id} el={el} />)
      }
    </div>
  );
}

export default FeedBackList;
