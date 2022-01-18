import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfiListItem({ profi }) {
  const navigate = useNavigate();

  return (
    <div className="proItem" onClick={() => navigate(`/profi/${profi.id}`)}>
      {/* <img src={profi.avatar} width="200px" height="150px" alt={profi.name} /> */}
      <div>
        {profi.id}
      </div>
      <div>
        {/* <strong>
          {' '}
          {profi.spesiality}
        </strong> */}
      </div>
      {/* <div><i>{`«${profi.description}»`}</i></div> */}
    </div>
  );
}

export default ProfiListItem;
