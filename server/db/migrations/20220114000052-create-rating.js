module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialties',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ratings');
  },
};
