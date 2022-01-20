import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './userSpec.module.scss';
import * as actions from '../../store/actions/userAction';

export default function MyContacts({ userId }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function addContactHandle(event) {
    event.preventDefault();
    const regex = /\S/;
    if (regex.test(inputValue)) {
      dispatch(actions.addContactThunk({ id: userId, contact: inputValue }));
    }
    setInputValue('');
  }

  return (
    <div className={styles.divMyContactsContainer}>
      <p className={styles.titleSpec}>Контакты</p>
      <form onSubmit={addContactHandle}>
        <input
          className={styles.inputContacts}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавьте контакт"
        />
        <button
          className={styles.btnAddContact}
          type="submit"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
