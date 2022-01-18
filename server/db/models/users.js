const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Location, Specialty, Rating,
      Contact, Portfolio, Reviews, Messages,
    }) {
      this.belongsTo(Location, { foreignKey: 'id' });
      this.hasMany(Specialty, { foreignKey: 'user_id' });
      this.hasOne(Rating, { foreignKey: 'user_id' });
      this.hasOne(Contact, { foreignKey: 'user_id' });
      this.hasMany(Portfolio, { foreignKey: 'user_id' });
      this.hasMany(Reviews, { foreignKey: 'user_id_from' });
      this.hasMany(Reviews, { foreignKey: 'user_id_to' });
      this.hasMany(Messages, { foreignKey: 'user_id_from' });
      this.hasMany(Messages, { foreignKey: 'user_id_to' });
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    status_service: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
    },
    user_country: {
      type: DataTypes.STRING,
    },
    user_city: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    avatar_link: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '/uploads/avatar-default-x-pat.png',
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
    updatedAt: false,
  });
  return User;
};
