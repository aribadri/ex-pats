import { Outlet, Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
// import Loader from '../UI/loader/Loader';
import styles from './layout.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ setModal }) {
  return (
    <>
      <header className={styles.layoutHeader}>
        <Link className={styles.linkHomePage} to="/">Xpat</Link>
        <MyButton type="button" className={styles.myButtonLogin} onClick={() => setModal(true)}>Войти</MyButton>
        {/* <Loader /> */}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
