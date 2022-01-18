import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MyButton from '../../UI/button/MyButton';
import imgLocation from '../../assets/img/location.png';
import styles from './layout.module.scss';
import * as actions from '../../store/actions/userAction';

// eslint-disable-next-line react/prop-types
function Layout({ setModal, location }) {
  const isAuth = useSelector((state) => state.user.userData.id);
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.layoutHeader}>
        <div className={styles.divLogoContainer}>
          <Link className={styles.linkHomePage} to="/">Xpat</Link>
          <img className={styles.imgLocation} src={imgLocation} alt="" />
          <p className={styles.nameLocation}>{`${location.country}, ${location.city}` || 'Russia, Moscow'}</p>
        </div>
        {isAuth
          ? (
            <div>
              <Link className={styles.linksUserAuth} to={`/users/${isAuth}/profile`}>Мой профиль</Link>
              <Link className={styles.linksUserAuth} to="/">Чаты</Link>
              <MyButton type="button" className={styles.myButtonLogin} onClick={() => dispatch(actions.logoutUserThunk())}>Выйти</MyButton>
            </div>
          )
          : <MyButton type="button" className={styles.myButtonLogin} onClick={() => setModal(true)}>Войти</MyButton>}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
