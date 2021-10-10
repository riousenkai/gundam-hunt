'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gundams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT(500)
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      upvotes: {
        type: Sequelize.INTEGER,
        defaulValue: 1,
      },
      grade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      image2: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      image3: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gundams');
  }
};
