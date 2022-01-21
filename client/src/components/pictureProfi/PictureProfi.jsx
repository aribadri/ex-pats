import React from 'react';
import logo from '../../icons/Безымянный.png';

function PictureProfi({ user }) {
  return (
    <div>

      <img src={`http://localhost:5000${user.avatar_link}`} alt="" style={{ width: '100%', height: '100%' }} />

    </div>
  );
}

export default PictureProfi;
