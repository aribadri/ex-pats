/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
// import MyButton from '../UI/button/MyButton';
import { Gapped, Button } from '@skbkontur/react-ui';
import { useContext } from 'react';

import axios from 'axios';
import InputList from '../UI/combobox/InputList';
import Loader from '../UI/loader/Loader';
import './HimePage.css';
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
    setProfiList(data.data);
  }
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
      <Loader />
    </div>
  );
}

export { HomePage };
