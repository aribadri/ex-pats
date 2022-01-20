module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(1234),
        allowNull: false,
      },
      status_service: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
        },
      },
      user_country: {
        type: Sequelize.STRING,
      },
      user_city: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      avatar_link: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '/uploads/avatar-default-x-pat.png',
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      specialty: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
