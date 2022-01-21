import React from 'react';

function Contacts({ user }) {
  return (
    <div className="contacts">
      {/* <div className="phone">8 999 999 99 99</div> */}
      <div className="e-mail">{user.email}</div>
    </div>
  );
}

export default Contacts;
