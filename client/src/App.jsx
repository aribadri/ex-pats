import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SpecialistPage from './pages/SpecialistPage';
import UserPage from './pages/UserPage';
import MyModal from './components/MyModal';
import Loader from './UI/loader/Loader';
// import LogiForm from './components/LoginForm';
// import RegForm from './components/RegForm';
import Tabs from './UI/tabs/Tabs';
import RegForm from './components/RegForm';
// import MyButton from './UI/button/MyButton';

function App() {
  const [modal, setModal] = useState(false);
  const items = [
    { title: 'Ищу услугу', content: <RegForm /> },
    { title: 'Предлагаю услугу', content: '0' },
    { title: 'Войти', content: 'lll' },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout modal={modal} setModal={setModal} />}>
          <Route index element={<HomePage />} />
          <Route path="/spesialist/:id" element={<SpecialistPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Route>
      </Routes>
      <MyModal visible={modal} setModal={setModal}>
        <Tabs items={items} />
      </MyModal>
      <div style={{ display: 'flex', alignItems: 'bottom', justifyContent: 'center' }}>
        <Loader />
      </div>

    </div>
  );
}

export default App;
