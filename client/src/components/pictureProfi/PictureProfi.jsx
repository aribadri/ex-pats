import React from 'react';
import logo from '../../icons/Безымянный.png';

function PictureProfi({ user }) {
  return (
    <div>

      <img src={`http://localhost:5000${user.avatar_link}`} alt="" style={{ width: '272px', height: '272px' }} />

    </div>
  );
}

export default PictureProfi;
