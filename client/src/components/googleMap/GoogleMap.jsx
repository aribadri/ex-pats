/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import About from '../about/About';

const key1 = 'AIzaSyDa-5dY_WHV88yhCIAQOWuilBO1zL3dgRc';
const containerStyle = {
  width: '1139px',
  height: '336px',
};

function Google({ userCoordinat }) {
  const [count, setCount] = useState(1);
  // function zoomNumbers() {
  //   setTimeout(() => {
  //     if (count < 11) {
  //       setCount((prev) => prev + 1);
  //     } else {
  //       setCount(10);
  //     }
  //   }, 500);
  // }

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
  return (
    <div>
      <LoadScript
        googleMapsApiKey={key1}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userCoordinat}
          zoom={count}
        >
          <Marker
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            position={userCoordinat}
            label="Собутыльник"
          />
          <Marker
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            position={userCoordinat}
            label="Педик"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Google);
