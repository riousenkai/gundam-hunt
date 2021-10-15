"use strict";
const faker = require("faker");

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
        {
          user_id: 3,
          gundam_id: 2,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          gundam_id: 2,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          gundam_id: 2,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          gundam_id: 4,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          gundam_id: 5,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          gundam_id: 1,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          gundam_id: 3,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          gundam_id: 9,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          gundam_id: 8,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          gundam_id: 6,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 10,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          gundam_id: 5,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          gundam_id: 8,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          gundam_id: 9,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          gundam_id: 5,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          gundam_id: 3,
          comment: faker.commerce.productDescription(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
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
