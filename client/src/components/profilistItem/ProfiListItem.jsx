/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfiListItem.css';

function ProfiListItem({ profi }) {
  const navigate = useNavigate();

  return (
    <div className="proItem" onClick={() => navigate(`/users/${profi.id}`)}>
      <div className="person">
        <div className="container">
          <div className="container-inner">

            <img
              width="150px"
              height="250px"
              className="img img1"
              src={`http://localhost:5000/${profi.avatar_link}`}
            />
          </div>
        </div>
        <div className="divider" />
        <div className="name">
          {profi.first_name}
          {(' ')}
          {profi.last_name}
        </div>
        <div className="title"><strong>{profi.specialty}</strong></div>
        <div className="title">
          {profi.user_country}
          ,
          {(' ')}
          {profi.user_city}
        </div>

      </div>
    </div>

  );
}

export default ProfiListItem;
