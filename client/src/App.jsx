/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import globalContext from './context/GlobalContext';
import Layout from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { SpecialistPage } from './pages/SpesialistPage';
import UserPage from './pages/UserPage';
import MyModal from './components/myModal/MyModal';
import LoginForm from './components/loginForm/LoginForm';
import Tabs from './UI/tabs/Tabs';
import RegForm from './components/regForm/RegForm';
import * as actions from './store/actions/userAction';
import Chat from './components/chat/Chat';
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  // const [regionSelected, setRegionSelected] = useState('');
  const [profiSelected, setProfiSelected] = useState('');
  const [modal, setModal] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [modalWorkCard, setmodalWorkCard] = useState(false);
  const [StartChat, setStartChat] = useState(false);
  const [profiList, setProfiList] = useState();
  const [userCoordinat, setUserCoordinat] = useState({});

  useEffect(() => {
    const getLocation = async () => {
      const data = await axios.get('https://json.geoiplookup.io');
      setUserCoordinat({
        lat: data.data.latitude, lng: data.data.longitude, city: data.data.city, country: data.data.country_name,
      });
    };
    getLocation();
    dispatch(actions.authUserThunk());
  }, [dispatch]);

  // const cities = [
  //   { value: 1, label: 'Пхукет' },
  //   { value: 2, label: 'Паттайя' },
  //   { value: 3, label: 'Бали' },
  //   { value: 4, label: 'Южные Гоа' },
  //   { value: 5, label: 'Северные Гоа' },
  //   { value: 6, label: 'Самуи' },
  //   { value: 7, label: 'Нячанг' },

  // ];

  // const profi = [
  //   { value: 1, label: 'Парикмахер' },
  //   { value: 2, label: 'Фотграф' },
  //   { value: 3, label: 'Няня' },
  //   { value: 4, label: 'Инструктор по серфу' },
  //   { value: 5, label: 'Гид' },
  //   { value: 6, label: 'Собутыльник' },
  // ];
  const items = [
    { title: 'Зарегистрироваться', content: <RegForm setModal={setModal} location={userCoordinat} /> },
    { title: 'Войти', content: <LoginForm setModal={setModal} location={userCoordinat} /> },
  ];

  const variations = ['Выберете ваш регион', 'Выберете услугу'];

  return (
    <div className="App">
      <globalContext.Provider value={{
        profiList, setProfiList, profiSelected,
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
                  // regionSelected={regionSelected}
                  profiSelected={profiSelected}
                  setProfiSelected={setProfiSelected}
                  // setRegionSelected={setRegionSelected}
                  variations={variations}
                  // arr1={profi}
                  // arr2={cities}
                />
              )}
            />
            <Route
              path="/users/:id"
              element={(
                <SpecialistPage
                  visible={modalFeedBack}
                  setModal={setModalFeedBack}
                  visibleWorkCard={modalWorkCard}
                  setmodalWorkCard={setmodalWorkCard}
                  visibleStartChat={StartChat}
                  setStartChat={setStartChat}
                />
)}
            />
            <Route
              path="/users/:id/profile"
              element={(
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
)}
            />
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
