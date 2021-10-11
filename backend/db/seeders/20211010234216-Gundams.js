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
          image3: "https://p-bandai.com/img/sg/p/m/N2569532001001_003.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Wing Gundam Zero (Endless Waltz)",
          user_id: 2,
          description: `The Wing Gundam Zero Endless Waltz model kit joins the 1/144 scale Real Grade lineup and becomes a fully articulated figure when completed. This version of the Wing Gundam Zero EW is built on a "Zero Frame," which allows for amazing posability. Some of the feathers on the model's wings are also poseable thanks to unique joints. The model comes with two buster rifles which can be joined to form one giant weapon.`,
          link: "https://www.usagundamstore.com/products/rg-1-144-xxxg-00w0-wing-gundam-zero-ew-gundam-w-endless-waltz-bandai?variant=1150784216",
          upvotes: 1,
          grade: "Real Grade 1/144",
          image1: "https://cdn.shopify.com/s/filegs/1/0727/8355/products/RGwgoc_01_LRG_900x900.jpg",
          image2: "https://cdn.shopify.com/s/files/1/0727/8355/products/RGwgoc_03_LRG_900x900.jpg",
          image3: "https://cdn.shopify.com/s/files/1/0727/8355/products/RGwgoc_05_LRG_900x900.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Gundams', null, {});
  }
};
