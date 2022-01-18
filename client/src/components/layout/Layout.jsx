// import '../../App.css';
import { Outlet, Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
import imgLocation from '../../assets/img/location.png';
// import Loader from '../UI/loader/Loader';
import styles from './layout.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ setModal, location }) {
  return (
    <>
      <header className={styles.layoutHeader}>
        <div className={styles.divLogoContainer}>
          <Link className={styles.linkHomePage} to="/">Xpat</Link>
          <img className={styles.imgLocation} src={imgLocation} alt="" />
          {/* {userCity} */}
          <p className={styles.nameLocation}>{`${location.country}, ${location.city}` || 'Russia, Moscow'}</p>
        </div>
        <MyButton type="button" className={styles.myButtonLogin} onClick={() => setModal(true)}>Войти</MyButton>
        {/* <Loader /> */}
        {/* Вы находитесь в | */}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
