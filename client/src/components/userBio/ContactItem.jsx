import React from 'react';
import styles from './userSpec.module.scss';

export default function ContactItem({ contacts }) {
  return (
    <div className={styles.divContactItemContainer}>
      {contacts.map((item) => (
        <div>
          <div
            key={item.id}
            className={styles.divContactItem}
          >
            {item.user_contact}
          </div>
          <div
            className={styles.divDeleteImg}
            // onClick={(e) => deleteImgHandler(e)}
            key={item.id}
          />

        </div>
      ))}
    </div>
  );
}
