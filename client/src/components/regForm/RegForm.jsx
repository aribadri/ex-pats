import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import styles from './regForm.module.scss';
import * as actions from '../../store/actions/userAction';

function RegForm({ setModal, location }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialStateInputs = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
    latitude: location.lat,
    longitude: location.lng,
    user_country: location.country,
    user_city: location.city,
  };

  const [register, setRegister] = useState(initialStateInputs);
  const changeInputRegister = (event) => {
    event.persist();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const DOMEN_SITE = 'http://localhost:5000';
  const submitChackin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert('You did not enter email');
    } else if (register.password !== register.password2) {
      alert('Repeated password incorrectly');
    } else if (!validator.isStrongPassword(
      register.password,
      {
        minSymbols: 0, minLength: 1, minLowercase: 0, minUppercase: 0, minNumbers: 1,
      },
    )) {
      alert('Password must consist of one lowercase, uppercase letter and number, at least 3 characters');
    } else {
      dispatch(actions.regUserLoading());
      const headers = {
        'Content-Type': 'application/json',
      };
      axios.post(`${DOMEN_SITE}/api/users/registration`, register, { headers, withCredentials: true })
        .then((res) => {
          if (res.data.message === 'Регистрация прошла успешно') {
            dispatch(actions.regUserSuccess(res.data.user));
            setRegister(initialStateInputs);
            setModal(false);
            navigate(`/users/${res.data.user.id}/profile`);
          } else if (res.data.message === 'Пользователь с таким именем уже существует') {
            alert('Пользователь с таким именем уже существует');
          } else if (res.data.message === 'Пользователь с такой фамилией уже существует') {
            alert('Пользователь с такой фамилией уже существует');
          } else if (res.data.message === 'Пользователь с такой почтой уже существует') {
            alert('Пользователь с такой почтой уже существует');
          }
        }).catch((error) => {
          dispatch(actions.regUserError(error));
          alert('На сервере произошла ошибка, попробуйте позже');
        });
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitChackin}>
        <p>
          <input
            className={styles.inputRegFormName}
            placeholder="Имя"
            type="first_name"
            id="first_name"
            name="first_name"
            value={register.first_name}
            onChange={changeInputRegister}
          />

          <input
            className={`${styles.inputRegFormName} ${styles.inputRegFormLastName}`}
            placeholder="Фамилия"
            type="last_name"
            id="last_name"
            name="last_name"
            value={register.last_name}
            onChange={changeInputRegister}
          />
        </p>
        <p>
          <input
            className={styles.inputRegFormEmailPass}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            formNoValidate
          />

        </p>
        <p>
          <input
            className={styles.inputRegFormEmailPass}
            placeholder="Пароль"
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
          />

        </p>
        <p>
          <input
            className={styles.inputRegFormEmailPass}
            placeholder="Повторите пароль"
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={changeInputRegister}
          />

        </p>
        <button className={styles.btnRegForm} type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegForm;
