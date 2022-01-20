import React from 'react';
import styles from './userSpec.module.scss';

export default function ContactItem({ contacts }) {
  return (
    <div className={styles.divContactItemContainer}>
      {contacts.map((item) => <div className={styles.divContactItem}>{item.user_contact}</div>)}
    </div>
  );
}
