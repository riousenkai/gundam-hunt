'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@demo.com',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password123'),
        image_url: "https://bbts1.azureedge.net/images/p/full/2019/10/dfe1879c-d6e8-4176-b863-1a98fa2b26dc.jpg",
        description: "Helloooo!",
      },
      {
        email: faker.internet.email(),
        username: "Heero",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: faker.internet.avatar(),
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Trowa",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: faker.internet.avatar(),
        description: faker.name.jobTitle(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Heero', 'Trowa'] }
    }, {});
  }
};
