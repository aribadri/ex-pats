import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Gapped, Button } from '@skbkontur/react-ui';
import MyButton from '../../UI/button/MyButton';
import imgLocation from '../../assets/img/location.png';
import styles from './layout.module.scss';
import * as actions from '../../store/actions/userAction';
import img from '../../icons/icons8-coconut-64-3.png';

// eslint-disable-next-line react/prop-types
function Layout({ setModal, location }) {
  const isAuth = useSelector((state) => state.user.userData.id);
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.layoutHeader}>
        <div className={styles.divLogoContainer}>
          <Link className={styles.linkHomePage} to="/">
            <h3>
              eX
              <img src={img} alt="" style={{ height: '50px', width: '50px' }} />
              Pat
            </h3>
          </Link>
          <img className={styles.imgLocation} src={imgLocation} alt="" />
          {location.country
            ? <p className={styles.nameLocation}>{`${location.country}, ${location.city}` || 'Russia, Moscow'}</p> : 'loading...'}
        </div>
        {isAuth
          ? (
            <div>
              <Link className={styles.linksUserAuth} to={`/users/${isAuth}/profile`}>Мой профиль</Link>
              <Link className={styles.linksUserAuth} to="/users/chats">Чаты</Link>
              <Button type="button" use="primary" onClick={() => dispatch(actions.logoutUserThunk())}>Выйти</Button>
            </div>
          )
          : <Button type="button" use="primary" size="small" onClick={() => setModal(true)}>Войти</Button>}
      </header>
      <Outlet />
    </>

  );
}

export default Layout;
