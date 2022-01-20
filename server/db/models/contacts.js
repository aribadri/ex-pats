const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Contact.init({
    user_contact: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Contact',
    timestamps: false,
  });
  return Contact;
};
