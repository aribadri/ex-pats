const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Portfolio.init({
    link_photo: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Portfolio',
    timestamps: false,
  });
  return Portfolio;
};
