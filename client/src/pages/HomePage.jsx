/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
// import MyButton from '../UI/button/MyButton';
import { Gapped, Button } from '@skbkontur/react-ui';
import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import InputList from '../UI/combobox/InputList';
import Loader from '../UI/loader/Loader';
import './HimePage.css';
import Google from '../components/googleMap/GoogleMap';
import MyButton from '../UI/button/MyButton';
import ProfiList from '../components/profilist/ProfiList';
import globalContext from '../context/GlobalContext';

function HomePage({
  variations, profiSelected, setProfiSelected, userCoordinat, listForMap, listForInput,
}) {
  const { profiList, setProfiList } = useContext(globalContext);
  const [btn, setBtn] = useState(false);
  async function getList() {
    setBtn(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Location: `${userCoordinat.country}`,
      },
    };
    const data = await axios.get(`http://localhost:5000/api/users/search/${profiSelected.label}`, config);
    setProfiList(data.data);
    setTimeout(() => {
      setBtn(false);
    }, 1000);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  }

  const arrNew = [...[listForInput]];

  return (
    <div className="homepage">
      <div className="homepage-background">
        <InputList arr={arrNew} variations={variations[1]} selected={profiSelected} setSelected={setProfiSelected} />
        {('     ')}
        <Gapped>
          <Button
            onClick={getList}
            size="small"
            use="pay"
            arrow="left"
            loading={btn}
          >
            Поиск
          </Button>
        </Gapped>
      </div>
      <div className="div-title-map">Специалисты на карте</div>
      <div className="container-map">
        <Google userCoordinat={userCoordinat} listForMap={listForMap} />
      </div>
      <ProfiList profiList={profiList} />
      {/* <Loader /> */}
    </div>
  );
}

export { HomePage };
