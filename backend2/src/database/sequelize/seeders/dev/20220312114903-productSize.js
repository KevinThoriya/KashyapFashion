"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "productSizeModels",
      [
        {
          name: "XS (32)",
        },
        {
          name: "S (34)",
        },
        {
          name: "M (36)",
        },
        {
          name: "L (38)",
        },
        {
          name: "XL (40)",
        },
        {
          name: "2XL (42)",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productSizeModels", null, {});
  },
};
