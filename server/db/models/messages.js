const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Messages.init({
    user_id_from: {
      type: DataTypes.INTEGER,
    },
    user_id_to: {
      type: DataTypes.INTEGER,
    },
    text_messages: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Messages',
    updatedAt: false,
  });
  return Messages;
};
