'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Gundams', [
        { name: "Shin Musha Gundam Black Robe Large Armor",
          user_id: 1,
          description: "MG 1/100 SHIN MUSHA GUNDAM SENGOKU NO JIN BLACK ROBE LARGE ARMOR / Katana/ Artillery / Spear / Naginata ／ Decorative pedestal ／ Folding screen ／ Kifuda style nameplate ／ Stand (for spear / naginata, for gun / sword)",
          link: "https://p-bandai.com/sg/item/N2569532001001",
          upvotes: 1,
          grade: "Master Grade 1/100",
          image1: "https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg",
          image2: "https://p-bandai.com/img/sg/p/m/N2569532001001_002.jpg",
          image3: "https://p-bandai.com/img/sg/p/m/N2569532001001_003.jpg"
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gundams', null, {});
  }
};
