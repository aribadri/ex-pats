const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cockieParser = require('cookie-parser');
require('dotenv').config();
const { check } = require('express-validator');

const registerRouter = require('./routers/registration/registerRouter');
const loginRouter = require('./routers/login/loginRouter');
const uploadsRouter = require('./routers/uploadsRouter/uploadsRouter');
const authRouter = require('./routers/auth/authRouter');
const uploadPortfolioRouter = require('./routers/uploadsRouter/uploadPortfolioRouter');
const getAllPortfolioRouter = require('./routers/uploadsRouter/getAllPortfolioRouter');

const app = express();

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: ['keyboard cat', 'old keyword'],
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 сутки
  },
};

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cockieParser());
app.use(session(sessionConfig));

// роутер регистрации с валидацией полей: first_name, last_name, email, password
app.use('/api/users/registration', [
  check('first_name', 'Имя пользователя не должно быть пустым').notEmpty(),
  check('last_name', 'Фамилия пользователя не должна быть пустым').notEmpty(),
  check('email', 'Email пользователя не должен быть пустым').notEmpty(),
  check('password', 'Пароль не может быть меньше 3 символов').isLength({ min: 3 }),
], registerRouter);

app.use('/api/users/login', loginRouter);
app.use('/api/upload', uploadsRouter);
app.use('/api/upload/portfolio', uploadPortfolioRouter);
app.use('/api/portfolio/', getAllPortfolioRouter);
app.use('/api/me', authRouter);

module.exports = app;
