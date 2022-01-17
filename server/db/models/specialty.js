const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Specialty.init({
    name_specialty: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    specialty_logo_link: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Specialty',
    timestamps: false,
  });
  return Specialty;
};
