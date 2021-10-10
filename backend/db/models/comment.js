"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      user_id: DataTypes.INTEGER,
      gundam_id: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: user_id });
    Comment.belongsTo(models.Gundam, { foreignKey: gundam_id });
  };
  return Comment;
};
