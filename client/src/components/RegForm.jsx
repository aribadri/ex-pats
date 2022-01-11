import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

function RegForm() {
  const [register, setRegister] = useState(() => ({
    username: '',
    email: '',
    password: '',
    password2: '',
  }));

  const changeInputRegister = (event) => {
    event.persist();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const DOMEN_SITE = 'http://localhost:3000';
  const submitChackin = (event) => {
    event.preventDefault();
    if (!validator.isEmail(register.email)) {
      alert('You did not enter email');
    } else if (register.password !== register.password2) {
      alert('Repeated password incorrectly');
    } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
      alert('Password must consist of one lowercase, uppercase letter and number, at least 8 characters');
    } else {
      axios.post(`${DOMEN_SITE}/auth/registration/`, {
        username: register.username,
        email: register.email,
        password: register.password,
      }).then((res) => {
        if (res.data === true) {
          window.location.href = `${DOMEN_SITE}/auth`;
        } else {
          alert('There is already a user with this email');
        }
      }).catch(() => {
        alert('An error occurred on the server');
      });
    }
  };

  return (
    <div className="form">
      <h2>Register user:</h2>
      <form onSubmit={submitChackin}>
        <p>
          Name:
          {' '}
          <input
            type="username"
            id="username"
            name="username"
            value={register.usernamr}
            onChange={changeInputRegister}
          />

        </p>
        <p>
          Email:
          {' '}
          <input
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={changeInputRegister}
            formNoValidate
          />

        </p>
        <p>
          Password:
          {' '}
          <input
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={changeInputRegister}
          />

        </p>
        <p>
          Repeat password:
          {' '}
          <input
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={changeInputRegister}
          />

        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegForm;
