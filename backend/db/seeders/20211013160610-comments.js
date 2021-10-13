"use strict";
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          user_id: 1,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
