import React from 'react';

function About({ user }) {
  return (
    <div>
      <div className="header-about">Обо мне</div>
      <div className="body-about">
        {user.description}
      </div>
    </div>
  );
}

export default About;
