/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  GoogleMap, LoadScript, Marker, MarkerClusterer, InfoBox,
} from '@react-google-maps/api';
import globalContext from '../../context/GlobalContext';
import About from '../about/About';

const key1 = 'AIzaSyAQUd8z6GRUADAmOn1CcNijqY0RFaSvoXw';
const containerStyle = {
  width: '1139px',
  height: '336px',
  borderRadius: '10px',
};

function Google({ userCoordinat, listForMap }) {
  console.log(userCoordinat);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
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
  function logoOnMap(link) {
    const iconPin = {

      url: `http://localhost:5000/${link}`,
      size: new window.google.maps.Size(70, 110),
      origin: new window.google.maps.Point(0, 15),
      scaledSize: new window.google.maps.Size(50, 50),
      border: new window.google.maps.Size(100, 100),
    };
    return iconPin
  }
  return (
    <div>
      <LoadScript
        googleMapsApiKey={key1}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userCoordinat ? { lat: userCoordinat.lat, lng: userCoordinat.lng } : { lat: 55, lng: 37 }}
          zoom={count}
        >
          <MarkerClusterer>
            {(clusterer) => listForMap.map((profi) => (
              <Marker
                key={profi.id}
                position={{ lat: Number(profi.latitude), lng: Number(profi.longitude) }}
                label={profi.first_name}
                clusterer={clusterer}
                onClick={() => navigate(`/users/${profi.id}`)}
                title={profi.first_name}
                animation={window.google.maps.Animation.DROP}
                icon={logoOnMap(profi.avatar_link)}
                style={{ borderRadius: '50%' }}
                optimized="false"
                labelStyle={{ backgroundColor: 'yellow', fontSize: '32px', padding: '16px' }}
              />
            ))}
          </MarkerClusterer>

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Google);
