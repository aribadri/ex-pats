const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate({ User, Rating }) {
      // this.belongsTo(User, { foreignKey: 'id' });
      this.belongsToMany(User, { through: Rating, foreignKey: 'speciality_id' });
    }
  }
  Specialty.init({
    label: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Specialty',
    timestamps: false,
  });
  return Specialty;
};
