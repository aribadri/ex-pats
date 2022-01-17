/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
// import MyButton from '../UI/button/MyButton';
import { Gapped, Button } from '@skbkontur/react-ui';
import { useEffect } from 'react';

import axios from 'axios';
import InputList from '../UI/combobox/InputList';
import Loader from '../UI/loader/Loader';
import './HimePage.css';
// import GoogleMap from '../components/googleMap/GoogleMap';
// import MyInput from '../UI/input/MyInput';
import Google from '../components/googleMap/GoogleMap';
import MyButton from '../UI/button/MyButton';
import ProfiList from '../components/profilist/ProfiList';

function HomePage({
  arr1, arr2, variations, profiSelected, setProfiSelected, regionSelected, setRegionSelected, userCity, setUserCity, setUserCoordinat, userCoordinat,
}) {
  useEffect(() => {
    const getLocation = async () => {
      const data = await axios.get('https://json.geoiplookup.io');
      setUserCity(data.data.city);
      setUserCoordinat({ lat: data.data.latitude, lng: data.data.longitude });
    };
    getLocation();
  }, []);

  console.log(userCity);
  console.log(userCoordinat);
  return (
    <div className="homepage">
      <div className="homepage-background">
        <InputList arr={arr1} variations={variations[1]} selected={profiSelected} setSelected={setProfiSelected} />
        {('     ')}
        <Gapped>
          <Button
            size="large"
            use="primary"
          >
            Find
          </Button>
        </Gapped>
      </div>
      <div className="container-map">
        <Google userCoordinat={userCoordinat} />
      </div>
      <ProfiList />
      <Loader />
    </div>
  );
}

export { HomePage };
