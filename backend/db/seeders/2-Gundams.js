"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Gundams",
      [
        {
          name: "Shin Musha Gundam Black Robe Large Armor",
          user_id: 1,
          description:
            "MG 1/100 SHIN MUSHA GUNDAM SENGOKU NO JIN BLACK ROBE LARGE ARMOR / Katana/ Artillery / Spear / Naginata ／ Decorative pedestal ／ Folding screen ／ Kifuda style nameplate ／ Stand (for spear / naginata, for gun / sword)",
          link: "https://p-bandai.com/sg/item/N2569532001001",
          upvotes: 1,
          grade: "Master Grade 1/100",
          image1: "https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg",
          image2: "https://p-bandai.com/img/sg/p/m/N2569532001001_002.jpg",
          image3: "https://p-bandai.com/img/sg/p/m/N2569532001001_003.jpg",
          createdAt: "2021-10-15T02:37:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Wing Gundam Zero (Endless Waltz)",
          user_id: 2,
          description: `The Wing Gundam Zero Endless Waltz model kit joins the 1/144 scale Real Grade lineup and becomes a fully articulated figure when completed. This version of the Wing Gundam Zero EW is built on a "Zero Frame," which allows for amazing posability. Some of the feathers on the model's wings are also poseable thanks to unique joints. The model comes with two buster rifles which can be joined to form one giant weapon.`,
          link: "https://www.usagundamstore.com/products/rg-1-144-xxxg-00w0-wing-gundam-zero-ew-gundam-w-endless-waltz-bandai?variant=1150784216",
          upvotes: 1,
          grade: "Real Grade 1/144",
          image1:
            "https://cdn.shopify.com/s/files/1/0727/8355/products/RGwgoc_01_LRG_900x900.jpg",
          image2:
            "https://cdn.shopify.com/s/files/1/0727/8355/products/RGwgoc_03_LRG_900x900.jpg",
          image3:
            "https://cdn.shopify.com/s/files/1/0727/8355/products/RGwgoc_05_LRG_900x900.jpg",
          createdAt: "2021-10-13T02:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Limited Gundam Barbatos［METALLIC GLOSS INJECTION］",
          user_id: 1,
          description: `THE GUNDAM BASE LIMITED PRODUCT

          *An original display stand is included.

          ----------------------------------------------------

          1/144 scale assembly plastic model

          ・No adhensives required for assembly.

          ----------------------------------------------------

          (Notes)

          ・This product cannot be found in model kits shops.

          ・This product may be on sale in events or other projects held by our company.

          ・Only a limited number of this product is available at ""PREMIUM BANDAI"". We apologize if we are out of stock on this product.

          ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.

          ・For this product, this shipping date is subject to change in somen cases depending on application status and production circumstances,

          Thank you for your understanding.

          ・Product images are in development stage. They may differ from the actual products.

          ・Product specifictions will be current during the pre-order perioud. We ask for your understanding as they may be subject to change.`,
          link: "https://www.usagundamstore.com/products/rg-1-144-xxxg-00w0-wing-gundam-zero-ew-gundam-w-endless-waltz-bandai?variant=1150784216",
          upvotes: 1,
          grade: "High Grade 1/144",
          image1: "https://p-bandai.com/img/us/p/m/N2390099001001_003.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2390099001001_001.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2390099001001_002.jpg",
          createdAt: "2021-10-14T02:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Unleashed RX-78-2 Gundam",
          user_id: 1,
          description:
            "In honor of the 40th anniversary of Gundam, the original PG is getting a do-over! The Gundam that started it all is being updated using all of the most recent plastic model technology, pioneered and perfected by Bandai. This thing is an absolute monster that allows you to build the iconic RX-78-2 Gundam in layers, starting with some pre-assembled inner frame parts (a la the RG line) and working all the way out to the most detailed rendition of the original Gundam to date! The list of accessories is mammoth, so we're just going to rattle them off: Beam rifle, 2 beam sabers, 1 LED beam saber, shield, core fighter, 2 RGB LED units for the chest vents, 4 interchangeable hand parts for each side, pilot figures of Sayla and Amuro, metal parts for the verniers and vulcans, marking seals, etched parts, and magnets that we don't fully understand the implementation of! WOW!",
          link: "https://www.gundamplanet.com/pg-unleashed-rx-78-2-gundam.html",
          upvotes: 1,
          grade: "Perfect Grade 1/60",
          image1: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/p/g/pg-unleashed-rx-78-2-gundam-10th.jpg",
          image2: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/p/g/pg-unleashed-rx-78-2-gundam-09th.jpg",
          image3: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/p/g/pg-unleashed-rx-78-2-gundam-02th.jpg",
          createdAt: "2021-10-15T02:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "GAT-X105E Strike E + I.W.S.P. (Custom)",
          user_id: 1,
          description:
            `The IWSP, Integrated Weapons Striker Pack, was designed to combine the capabilities of the Sword, Launcher, and Aile packs into one. The IWSP featured a flight pack mounting a pair of beam cannons, a pair of rail cannons, a pair of anti-ship swords, and a shield mounting a 6-barrel Gatling gun and a beam boomerang. A Seed-style stand is included for all your posing needs right out of the box!`,
          link: "https://www.gundamplanet.com/pg-unleashed-rx-78-2-gundam.html",
          upvotes: 1,
          grade: "Master Grade 1/100",
          image1: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/m/g/mg-gat-x105e-strike-e-i-w-s-p-lucas-o-donnell-custom-01.jpg",
          image2: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/m/g/mg-gat-x105e-strike-e-i-w-s-p-lucas-o-donnell-custom-05.jpg",
          image3: "https://www.gundamplanet.com/media/catalog/product/cache/89806700f2f2fe9ae1d5c7ebaf942715/m/g/mg-gat-x105e-strike-e-i-w-s-p-lucas-o-donnell-custom-02.jpg",
          createdAt: "2021-10-15T03:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "High Mobility Type Zaku II",
          user_id: 2,
          description:
            `Weapons: Zaku Bazooka / Zaku Machine Gun / Heat Hawk

            －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
            1/144 scale assembly plastic model
            ･No adhesives required for assembly
            －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－


            *The product in the image is a prototype still in its developmental stage. The product is also painted. The actual product may appear differently from the image.
            *Please note that in some cases bubbles may enter the clear parts during manufacturing process.

            (Notes)
            ･This product cannot be found in model kits shops.
            ･This product may be on sale in events or other projects held by our company.
            ･Only a limited number of this product is available at 'PREMIUM BANDAI'. We apologize if we are out of stock on this product.
            ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.
            ・For this product, the shipping date is subject to change in some cases depending on application status and production circumstances,
            Thank you for your understanding.
            ･Product images are in development stage. They may differ from the actual products.
            ･Product specifications will be current during the pre-order period.We ask for your understanding as they may be subject to change.
            ･The product packaging of Hobby shop item is for delivery purpose only. As long as the item itself is having no defection or damage, there will be no return or refund provided for situations that were related to cosmetic issues including wear, dent, or similar issues found on original packaging.`,
          link: "https://p-bandai.com/us/item/N2584056001001",
          upvotes: 1,
          grade: "Real Grade 1/144",
          image1: "https://p-bandai.com/img/us/p/m/N2584056001001_001.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2584056001001_002.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2584056001001_003.jpg",
          createdAt: "2020-10-30T03:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Core Gundam & Marsfour Unit",
          user_id: 2,
          description: `EVENT LIMITED PRODUCT


          ----------------------------------------------------
          1/144 scale assembly plastic model
          ・No adhensives required for assembly.
          ----------------------------------------------------
          (Notes)
          ・This product cannot be found in model kits shops.
          ・This product may be on sale in events or other projects held by our company.
          ・Only a limited number of this product is available at ""PREMIUM BANDAI"". We apologize if we are out of stock on this product.
          ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.
          ・For this product, this shipping date is subject to change in somen cases depending on application status and production circumstances,
          Thank you for your understanding.
          ・Product images are in development stage. They may differ from the actual products.
          `,
          link: "https://p-bandai.com/us/item/N2519697001001",
          upvotes: 1,
          grade: "High Grade 1/144",
          image1: "https://i.imgur.com/3U1tqI3.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2519697001001_001.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2519697001001_002.jpg",
          createdAt: "2021-10-15T03:30:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Crossbone Gundam X1 [Titanium Finish]",
          user_id: 2,
          description: ` EVENT LIMITED PRODUCT

          *Action base is sold separately.
          ----------------------------------------------------
          1/144 scale assembly plastic model
          ・No adhensives required for assembly.
          ----------------------------------------------------
          (Notes)
          ・This product cannot be found in model kits shops.
          ・This product may be on sale in events or other projects held by our company.
          ・Only a limited number of this product is available at ""PREMIUM BANDAI"". We apologize if we are out of stock on this product.
          ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.
          ・For this product, this shipping date is subject to change in somen cases depending on application status and production circumstances,
          Thank you for your understanding.
          ・Product images are in development stage. They may differ from the actual products.
          ・Product specifictions will be current during the pre-order perioud. We ask for your understanding as they may be subject to change.`,
          link: "https://p-bandai.com/us/item/N2475065001001",
          upvotes: 1,
          grade: "Real Grade 1/144",
          image1: "https://p-bandai.com/img/us/p/m/N2475065001001_001.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2475065001001_002.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2475065001001_003.jpg",
          createdAt: "2021-10-15T03:31:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Penelope [Clear Color] Limited Package",
          user_id: 2,
          description: ` EVENT LIMITED PRODUCT


          ----------------------------------------------------
          1/144 scale assembly plastic model
          ・No adhensives required for assembly.
          ----------------------------------------------------
          (Notes)
          ・This product cannot be found in model kits shops.
          ・This product may be on sale in events or other projects held by our company.
          ・Only a limited number of this product is available at ""PREMIUM BANDAI"". We apologize if we are out of stock on this product.
          ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.
          ・For this product, this shipping date is subject to change in somen cases depending on application status and production circumstances,
          Thank you for your understanding.
          ・Product images are in development stage. They may differ from the actual products.
          ・Product specifictions will be current during the pre-order perioud. We ask for your understanding as they may be subject to change.`,
          link: "https://p-bandai.com/us/item/N2515190001001",
          upvotes: 1,
          grade: "High Grade 1/144",
          image1: "https://p-bandai.com/img/us/p/m/N2515190001001_001.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2515190001001_002.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2515190001001_003.jpg",
          createdAt: "2021-10-15T03:20:47.749Z",
          updatedAt: new Date(),
        },
        {
          name: "Zaku II Type C-6/R6",
          user_id: 2,
          description: ` THE GUNDAM BASE LIMITED PRODUCT

          *Action base is sold separately.
          ----------------------------------------------------
          1/144 scale assembly plastic model
          ・No adhensives required for assembly.
          ----------------------------------------------------
          (Notes)
          ・This product cannot be found in model kits shops.
          ・This product may be on sale in events or other projects held by our company.
          ・Only a limited number of this product is available at ""PREMIUM BANDAI"". We apologize if we are out of stock on this product.
          ・Please note that for this product, due to the number of produced units, we are limiting the quantity available in each order.
          ・For this product, this shipping date is subject to change in somen cases depending on application status and production circumstances,
          Thank you for your understanding.
          ・Product images are in development stage. They may differ from the actual products.
          ・Product specifictions will be current during the pre-order perioud. We ask for your understanding as they may be subject to change.`,
          link: "",
          upvotes: 1,
          grade: "High Grade 1/144",
          image1: "https://p-bandai.com/img/us/p/m/N2531905001001_001.jpg",
          image2: "https://p-bandai.com/img/us/p/m/N2531905001001_003.jpg",
          image3: "https://p-bandai.com/img/us/p/m/N2531905001001_002.jpg",
          createdAt: "2021-10-10T03:30:47.749Z",
          updatedAt: new Date(),
        },
        // {
        //   name: "11th seeder rn",
        //   user_id: 2,
        //   description: ``,
        //   link: "",
        //   upvotes: 1,
        //   grade: " Grade 1/100",
        //   image1: "",
        //   image2: "",
        //   image3: "",
        //   createdAt: "2021-10-10T03:30:47.749Z",
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Gundams", null, {});
  },
};
