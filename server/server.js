const app = require('./app');
require('dotenv').config();
const { connectToDB } = require('./db');

const PORT = process.env.PORT ?? 7000;

function connectServer() {
  app.listen(PORT, () => console.log(`Соединение с сервером прошло успешно PORT: ${PORT}`));
}

connectToDB()
  .then(connectServer)
  .catch(process.exit);
