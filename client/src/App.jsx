/* eslint-disable max-len */
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { ComboBox } from '@skbkontur/react-ui';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
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
import Chat from './components/chat/Chat';

function App() {
  const [regionSelected, setRegionSelected] = useState('');
  const [profiSelected, setProfiSelected] = useState('');

  const [modal, setModal] = useState(false);
  const [modalFeedBack, setModalFeedBack] = useState(false);
  const [modalWorkCard, setmodalWorkCard] = useState(false);

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
    { title: 'Зарегистрироваться', content: <RegForm /> },
    { title: 'Войти', content: <LoginForm /> },
  ];

  const variations = ['Выберете ваш регион', 'Выберете услугу'];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout modal={modal} setModal={setModal} />}>
          <Route
            index
            element={(
              <HomePage
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
          <Route path="/profi/:id" element={<SpecialistPage visible={modalFeedBack} setModal={setModalFeedBack} visibleWorkCard={modalWorkCard} setmodalWorkCard={setmodalWorkCard} />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
      <MyModal visible={modal} setModal={setModal}>
        <Tabs items={items} />
      </MyModal>

    </div>
  );
}

export default App;
