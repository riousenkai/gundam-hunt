"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Upvotes",
      [
        {
          user_id: 1,
          gundam_id: 1,
        },
        {
          user_id: 2,
          gundam_id: 2,
        },
        {
          user_id: 1,
          gundam_id: 3,
        },
        {
          user_id: 1,
          gundam_id: 4,
        },
        {
          user_id: 1,
          gundam_id: 5,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Upvotes", null, {});
  },
};
