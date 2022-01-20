import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../components/avatar/Avatar';
import Portfolio from '../components/portfolio/Portfolio';
import { getAllPortfolioThunk } from '../store/actions/userAction';
import styles from './userPage.module.scss';
import * as actions from '../store/actions/userAction';
import UserSpec from '../components/userBio/UserSpec';
import AboutMe from '../components/aboutMe/AboutMe';
import MyContacts from '../components/userBio/MyContacts';
import ContactItem from '../components/userBio/ContactItem';

function UserPage() {
  const userData = useSelector((state) => state.user.userData);
  const statusLoading = useSelector((state) => state.user.loading);
  const statusError = useSelector((state) => state.user.error);
  console.log(statusError, 'statusError');
  const userContacts = useSelector((state) => state.user.userContacts);
  // userId используется для того, чтобы обновить ссылку в БД у конкретного юзера
  const userId = userData.id;
  const userStatusService = userData.status_service;

  // достаем все картинки из портфолио
  const userPortfolioData = useSelector((state) => state.user.userPortfolio);
  const [avatar, setAvatar] = useState({});
  const dispatch = useDispatch();

  // состояние для лоадера, можно заменить на состояние из редакса
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getAllPortfolioThunk(userId));
    }
  }, [userId]);

  return (
    <div>
      <div className={styles.divContainerAvatarBio}>
        <Avatar avatar={avatar} setAvatar={setAvatar} userId={userId} setUploading={setUploading} />

        <div className={styles.divBioContainer}>
          <p className={styles.tagPnameUser}>
            {userData.first_name}
            {' '}
            {userData.last_name }
          </p>

          <label className={styles.labelCheckBoxStatus}>
            Рекламировать услуги
            <input
              className={styles.inputCheckBoxStatus}
              checked={!!userStatusService}
              onChange={(e) => dispatch(
                actions.statusServiceThunk({ id: userData.id, status_service: e.target.checked }),
              )}
              type="checkbox"
            />
          </label>
          {userStatusService && <UserSpec />}
        </div>

      </div>

      {userStatusService
      && (
      <>
        <AboutMe
          userId={userId}
          userDescription={userData.description}
          loading={statusLoading}
          error={statusError}
        />
        <Portfolio
          images={userPortfolioData}
          userId={userId}
          setUploading={setUploading}
        />
        <MyContacts userId={userId} />
        {userContacts && (
          <ContactItem contacts={userContacts} />
        )}
      </>
      )}
    </div>
  );
}

export default UserPage;
