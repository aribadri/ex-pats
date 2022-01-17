import { Outlet, Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
// import Loader from '../UI/loader/Loader';

// eslint-disable-next-line react/prop-types
function Layout({ setModal }) {
  return (
    <>
      <header className="App-header">
        <Link to="/">Xpat</Link>
        <MyButton type="button" className="btn btn-primary" onClick={() => setModal(true)}>Login/Registration</MyButton>
        <Link to="/chat"><MyButton type="button" className="btn btn-primary">Chats</MyButton></Link>
        {/* <Loader /> */}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
