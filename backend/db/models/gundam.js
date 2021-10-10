"use strict";
module.exports = (sequelize, DataTypes) => {
  const Gundam = sequelize.define(
    "Gundam",
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      link: DataTypes.STRING,
      upvotes: DataTypes.INTEGER,
      grade: DataTypes.STRING,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
    },
    {}
  );
  Gundam.associate = function (models) {
    Gundam.belongsTo(models.User, { foreignKey: user_id });
    Gundam.hasMany(models.Upvote, { foreignKey: gundam_id });
    Gundam.hasMany(models.Comment, { foreignKey: gundam_id });
  };
  return Gundam;
};
