const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'location_id' });
    }
  }
  Location.init({
    name_city: {
      type: DataTypes.STRING,
    },
    location_logo_link: {
      type: DataTypes.STRING(1234),
    },
  }, {
    sequelize,
    modelName: 'Location',
    timestamps: false,
  });
  return Location;
};
