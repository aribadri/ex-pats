const express = require('express');
const logger = require('morgan');
// const path = require('path');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cockieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;
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

app.use(logger('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(cockieParser());
app.use(session(sessionConfig));

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
