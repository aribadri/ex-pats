/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import styles from '../regForm/regForm.module.scss';
import { loginUserSuccess } from '../../store/actions/userAction';

function LogiForm({ setModal, location }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [register, setRegister] = useState(() => ({
  //   email: '',
  //   password: '',
  // }));
  console.log(location);
  const initialStateInputs = {
    email: '',
    password: '',
    latitude: location.lat,
    longitude: location.lng,
  };
  const [register, setRegister] = useState(initialStateInputs);

  const changeInputLogin = (event) => {
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
    } else if (!validator.isStrongPassword(register.password, {
      minSymbols: 0, minLength: 1, minLowercase: 0, minUppercase: 0, minNumbers: 1,
    })) {
      alert('Password must consist of one lowercase, uppercase letter and number, at least 3 characters');
    } else {
      const headers = {
        'Content-Type': 'application/json',
      };
      axios.post(`${DOMEN_SITE}/api/users/login`, register, { headers, withCredentials: true })
        .then((res) => {
          console.log(res);
          setRegister(initialStateInputs);
          if (res.data.message === 'Авторизация прошла успешно') {
            dispatch(loginUserSuccess(res.data.user));
            navigate(`/users/${res.data.user.id}/profile`);
            setModal(false);
          } else if (res.data.message === 'Пользователь не найден') {
            alert('Пользователь не найден');
          } else if (res.data.message === 'Введен неверный пароль') {
            alert('Введен неверный пароль');
          } else if (res.data.message === 'Авторизация прошла успешно, локация не изменилась') {
            console.log(res.data.user, 'login form data');
            dispatch(loginUserSuccess(res.data.user));
            navigate(`/users/${res.data.user.id}/profile`);
            setModal(false);
          }
        }).catch(() => {
          alert('На сервере произошла ошибка, попробуйте позже');
        });
    }
  };

  return (
    <div>
      <form className={styles.formLoginDisplayFlex} onSubmit={submitChackin}>
        <input
          className={styles.inputRegFormEmailPass}
          placeholder="Email"
          name="email"
          type="email"
          value={register.email}
          onChange={changeInputLogin}
        />
        <input
          className={styles.inputRegFormEmailPass}
          placeholder="Пароль"
          name="password"
          type="password"
          value={register.password}
          onChange={changeInputLogin}
        />
        <button className={styles.btnRegForm} type="submit">Войти</button>
      </form>

    </div>
  );
}

export default LogiForm;
