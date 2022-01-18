/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
// import MyButton from '../UI/button/MyButton';
import { Gapped, Button } from '@skbkontur/react-ui';
import { useEffect, useContext, useParams } from 'react';

import axios from 'axios';
import InputList from '../UI/combobox/InputList';
import Loader from '../UI/loader/Loader';
import './HimePage.css';
// import GoogleMap from '../components/googleMap/GoogleMap';
// import MyInput from '../UI/input/MyInput';
import Google from '../components/googleMap/GoogleMap';
import MyButton from '../UI/button/MyButton';
import ProfiList from '../components/profilist/ProfiList';
import globalContext from '../context/GlobalContext';

function HomePage({
  arr1, variations, profiSelected, setProfiSelected, userCoordinat,
}) {
  const { profiList, setProfiList } = useContext(globalContext);
  async function getList() {
    const data = await axios.get(`http://localhost:5000/api/users/${profiSelected.label}`);
    console.log(data.data);
    setProfiList(data.data);
  }

  // useEffect(() => {
  //   console.log('inside useeffect');
  // const getLocation = async () => {
  //   const data = await axios.get('https://json.geoiplookup.io');
  //   console.log(data, 'coordinats');
  //   setUserCoordinat({
  //     lat: data.data.latitude, lng: data.data.longitude, city: data.data.city, country: data.data.country_name,
  //   });
  // };
  // getLocation();
  // }, []);

  // console.log(userCity);
  console.log(userCoordinat);
  return (
    <div className="homepage">
      <div className="homepage-background">
        <InputList arr={arr1} variations={variations[1]} selected={profiSelected} setSelected={setProfiSelected} />
        {('     ')}
        <Gapped>
          <Button
            onClick={getList}
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
      <ProfiList profiList={profiList} />
      {/* <Loader /> */}
    </div>
  );
}

export { HomePage };
