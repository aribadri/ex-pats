import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { useDispatch } from 'react-redux';
import styles from './aboutMe.module.scss';
import * as actions from '../../store/actions/userActionSaga';

export default function AboutMe({ userId, userDescription }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(userDescription);

  function addInputHandler(e) {
    setInputValue(e.target.value);
    const regex = /\S/;
    if (regex.test(e.target.value)) {
      dispatch(actions.addDescriptionSaga(
        { userId, dataValue: e.target.value },
      ));
    }
  }

  return (
    <div className={styles.divAboutMeContainer}>
      <p className={styles.aboutMeTitle}>
        Обо мне
      </p>
      <TextareaAutosize
        value={inputValue}
        className={styles.inputDescription}
        placeholder="Напишите о себе"
        onChange={(e) => addInputHandler(e)}
      />
    </div>
  );
}
