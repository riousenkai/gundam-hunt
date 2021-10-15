"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Upvotes",
      [
        {
          user_id: 1,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gundam_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gundam_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          gundam_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          gundam_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          gundam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        {
          user_id: 8,
          gundam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          gundam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          gundam_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Upvotes", null, {});
  },
};
