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
        username: "Revan",
        hashedPassword: bcrypt.hashSync('revan123'),
        image_url: "https://www.pcgamesn.com/wp-content/uploads/2021/09/knights-of-the-old-republic-remake-pc-580x334.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Heero",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "http://i.imgur.com/TRiZ6Np.png",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Trowa",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "http://4.bp.blogspot.com/_XFGuSZ6n1LY/SP3vcQFPYPI/AAAAAAAADZA/5Gq-z-D7djg/s400/gw_trowa011.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Kira",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "https://practicaltyping.com/wp-content/uploads/2020/03/vignette.wikia_.nocookie.net183KiraCE70.png",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Domon",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "https://pm1.narvii.com/6448/cb0f812a6e734a6915cdd6305921b27124e63ee8_hq.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Zechs",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "https://static.wikia.nocookie.net/gundam/images/9/99/Masked_zechs.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Amuro",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "http://pm1.narvii.com/6774/dce5dc8e74b3cb23f9f592e902361355b8d4506fv2_00.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Mikazuki",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "https://i.redd.it/bl5v3re4zesz.jpg",
        description: faker.name.jobTitle(),
      },
      {
        email: faker.internet.email(),
        username: "Quatre",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        image_url: "http://25.media.tumblr.com/2ba3875a2d83485c3b74eccc10e54560/tumblr_mt4iaoLD5A1r03uwto1_500.gif",
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
