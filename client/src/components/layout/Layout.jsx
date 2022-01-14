// import '../../App.css';
import { Outlet, Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';

// import Loader from '../UI/loader/Loader';

// eslint-disable-next-line react/prop-types
function Layout({ setModal, userCity }) {
  return (
    <>
      <header className="App-header">
        <Link to="/">Xpat</Link>
        <MyButton type="button" className="btn btn-primary" onClick={() => setModal(true)}>Войти</MyButton>
        {/* <Loader /> */}
        Вы находитесь в |
        {userCity}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
