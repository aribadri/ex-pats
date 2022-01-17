const { sequelize } = require('./models');

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой прошло успешно');
  } catch (error) {
    console.log(`Соединение с базой прошло неудачно, ошибка: ${error.message}`);
  }
}

module.exports = { connectToDB };
