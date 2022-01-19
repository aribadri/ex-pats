import React from 'react';

function Countryprofi({ user }) {
  return (
    <div>
      {`${user.user_country}, ${user.user_city}`}
    </div>
  );
}

export default Countryprofi;
