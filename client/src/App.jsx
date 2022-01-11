// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SpecialistPage from './pages/SpecialistPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/spesialist/:id" element={<SpecialistPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
