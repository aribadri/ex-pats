module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Specialties', [{
    label: 'Няня',
  },
  {
    label: 'Фотограф',
  },
  {
    label: 'Видеооператор',
  },
  {
    label: 'Барбер',
  },
  {
    label: 'Парикмахер',
  },
  {
    label: 'Бровист',
  },
  {
    label: 'Наращивание ногтей',
  },
  {
    label: 'Косметолог',
  },
  {
    label: 'Массажист',
  },
  {
    label: 'Переводчик',
  },
  {
    label: 'Риелтор',
  },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Specialties', null, {}),
};
