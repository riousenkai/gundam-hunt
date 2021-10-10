'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    user_id: DataTypes.INTEGER,
    gundam_id: DataTypes.INTEGER
  }, {});
  Upvote.associate = function(models) {
    Upvote.belongsTo(models.User, { foreignKey: "user_id" })
    Upvote.belongsTo(models.Gundam, { foreignKey: "gundam_id" })
  };
  return Upvote;
};
