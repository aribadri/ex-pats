/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import './App.css';
import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
// import { ComboBox } from '@skbkontur/react-ui';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import globalContext from './context/GlobalContext';
import Layout from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { SpecialistPage } from './pages/SpesialistPage';
import UserPage from './pages/UserPage';
import MyModal from './components/myModal/MyModal';
// import Loader from './UI/loader/Loader';
import LoginForm from './components/loginForm/LoginForm';
// import RegForm from './components/RegForm';
import Tabs from './UI/tabs/Tabs';
import RegForm from './components/regForm/RegForm';
// import InputList from './UI/combobox/InputList';
// import InputList from './UI/combobox/InputList';
// import MyButton from './UI/button/MyButton';
import * as actions from './store/actions/userAction';
import Chat from './components/chat/Chat';

function App() {
  const dispatch = useDispatch();

  const [regionSelected, setRegionSelected] = useState('');
  const [profiSelected, setProfiSelected] = useState('');
  const [modal, setModal] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [modalWorkCard, setmodalWorkCard] = useState(false);
  const [profiList, setProfiList] = useState();
  const [userCoordinat, setUserCoordinat] = useState({});
  console.log(userCoordinat, 'userCoordinat app ');

  useEffect(() => {
    const getLocation = async () => {
      const data = await axios.get('https://json.geoiplookup.io');
      console.log(data, 'coordinats');
      setUserCoordinat({
        lat: data.data.latitude, lng: data.data.longitude, city: data.data.city, country: data.data.country_name,
      });
    };
    getLocation();

    axios.get('http://localhost:5000/api/me', { withCredentials: true })
      .then((res) => res.data)
      .then((loggedUserData) => dispatch(actions.loginUserSuccess(loggedUserData)));
  }, [dispatch]);

  const cities = [
    { value: 1, label: 'Пхукет' },
    { value: 2, label: 'Паттайя' },
    { value: 3, label: 'Бали' },
    { value: 4, label: 'Южные Гоа' },
    { value: 5, label: 'Северные Гоа' },
    { value: 6, label: 'Самуи' },
    { value: 7, label: 'Нячанг' },

  ];

  const profi = [
    { value: 1, label: 'Парикмахер' },
    { value: 2, label: 'Фотграф' },
    { value: 3, label: 'Няня' },
    { value: 4, label: 'Инструктор по серфу' },
    { value: 5, label: 'Гид' },
    { value: 6, label: 'Собутыльник' },
  ];
  const items = [
    { title: 'Зарегистрироваться', content: <RegForm setModal={setModal} location={userCoordinat} /> },
    { title: 'Войти', content: <LoginForm setModal={setModal} location={userCoordinat} /> },
  ];

  const variations = ['Выберете ваш регион', 'Выберете услугу'];

  const profiList1 = [
    {
      id: 1,
      name: 'Берды алаверды',
      avatar: 'http://gdb.rferl.org/2F7F39DC-1281-464B-8957-E45F2BDA2D49_mw800_s.jpg',
      lat: -33.718234,
      lng: 150.363181,
      spesiality: 'Царь',
      description: 'Иххххайй бааааля',
    },
    {
      id: 2,
      name: 'Никитич',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_Q3yn620nkNTuj4F6wBkwXvJHFX-lHhB7-AiFM7laMVFP7MhBjBOlibxDMn7jFN2ukY&usqp=CAU',
      lat: -33.727111,
      lng: 150.371124,
      spesiality: 'Barmen',
      description: 'Напою  метилом',
    },
    {
      id: 3,
      name: 'Cнежанна',
      avatar: 'https://static.ngs.ru/news/2017/preview/c3dcb3ff248815972e944a6b771bb67b04fd9a86_0_0_c.jpg',
      lat: 55.751150955624,
      lng: 37.596928005819,
      spesiality: 'Инстателка',
      description: 'Не знакомлюсь',

    },
    {
      id: 4,
      name: 'Ратмир',
      avatar: 'https://blatata.com/upload/000/u1/f/6/tobi-king-photos-big.jpg',
      lat: 55.25115095562456,
      lng: 37.996928005819,
      spesiality: 'Ифноцыган',
      description: 'Продам курсы по JS',

    },
  ];

  return (
    <div className="App">
      <globalContext.Provider value={{
        profiList, setProfiList, profiSelected, profiList1,
      }}
      >

        <Routes>
          <Route path="/" element={<Layout location={userCoordinat} modal={modal} setModal={setModal} />}>
            <Route
              index
              element={(
                <HomePage
                  userCoordinat={userCoordinat}
                  setUserCoordinat={setUserCoordinat}
                  regionSelected={regionSelected}
                  profiSelected={profiSelected}
                  setProfiSelected={setProfiSelected}
                  setRegionSelected={setRegionSelected}
                  variations={variations}
                  arr1={profi}
                  arr2={cities}
                />
              )}
            />
            <Route path="/users/:id" element={<SpecialistPage visible={modalFeedBack} setModal={setModalFeedBack} visibleWorkCard={modalWorkCard} setmodalWorkCard={setmodalWorkCard} />} />
            <Route path="/users/:id/profile" element={<UserPage />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
        <MyModal visible={modal} setModal={setModal}>
          <Tabs items={items} />
        </MyModal>
      </globalContext.Provider>

    </div>
  );
}

export default App;
