import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './userSpec.module.scss';
import * as actions from '../../store/actions/userAction';

export default function ContactItem({ contacts }) {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.user.error);

  return (
    <>
      {isError && (
      <div className={styles.errorMessage}>
        Такой контакт уже существует
      </div>
      )}
      <div className={styles.divContactItemContainer}>
        {contacts.map((item) => (
          <div className={styles.divContactMainItem} key={item.id}>
            <div className={styles.divContactItem}>
              {item.user_contact}
            </div>
            <div
              className={styles.divDeleteImg}
              onClick={(e) => dispatch(actions.deleteContactThunk(Number(item.id)))}
            />
          </div>
        ))}
      </div>
    </>
  );
}
