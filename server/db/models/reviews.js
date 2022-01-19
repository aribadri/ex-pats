const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Reviews.init({
    user_id_from: {
      type: DataTypes.INTEGER,
    },
    user_id_to: {
      type: DataTypes.INTEGER,
    },
    text_content: {
      type: DataTypes.TEXT,
    },
    stars_count: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Reviews',
    updatedAt: false,
  });
  return Reviews;
};
