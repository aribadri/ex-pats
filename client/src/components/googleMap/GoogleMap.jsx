/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  GoogleMap, LoadScript, Marker, MarkerClusterer,
} from '@react-google-maps/api';
import globalContext from '../../context/GlobalContext';
import About from '../about/About';

const key1 = 'AIzaSyAQUd8z6GRUADAmOn1CcNijqY0RFaSvoXw';
const containerStyle = {
  width: '1139px',
  height: '336px',
};

function Google({ userCoordinat }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const { profiList } = useContext(globalContext);
  function zoomNumbers() {
    let number;
    for (let i = 1; i < 11; i++) {
      number = i;
    }
    return number;
  }
  setTimeout(() => {
    setCount(zoomNumbers());
  }, 3000);

  // navigateToProfi = () => {

  // }
  return (
    <div>
      <LoadScript
        googleMapsApiKey={key1}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userCoordinat || { lat: 55.75115095562456, lng: 37.596928005819485 }}
          zoom={count}
        >
          <MarkerClusterer title="Hello">
            {(clusterer) => profiList.map((profi) => (
              <Marker
                key={profi.id}
                position={{ lat: profi.lat, lng: profi.lng }}
                label={profi.name}
                clusterer={clusterer}
                onClick={() => navigate(`/profi/${profi.id}`)}
                title={profi.spesiality}

              />
            ))}
          </MarkerClusterer>

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Google);
