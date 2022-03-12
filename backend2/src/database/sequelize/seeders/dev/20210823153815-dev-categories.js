"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Ready-to-Ship Styles",
        parent_id: 0,
      },
    ]);
    await queryInterface.bulkInsert("categories", [
      {
        name: "Wedding Collection",
        parent_id: 0,
      },
    ]);

    await queryInterface.bulkInsert("categories", [
      {
        name: "Indowestern Gowns",
        parent_id: 1,
      },
    ]);

    // 2
    await queryInterface.bulkInsert("categories", [
      {
        name: "Kanchipuram Saree",
        parent_id: 1,
      },
    ]);

    // 3
    await queryInterface.bulkInsert("categories", [
      {
        name: "Banarasi Sarees",
        parent_id: 1,
      },
    ]);

    // 4
    await queryInterface.bulkInsert("categories", [
      {
        name: "Sharara Suit",
        parent_id: 1,
      },
    ]);

    // 5
    await queryInterface.bulkInsert("categories", [
      {
        name: "Party Wear Lehenga",
        parent_id: 1,
      },
    ]);

    // 6
    await queryInterface.bulkInsert("categories", [
      {
        name: "Bridal Lehenga",
        parent_id: 2,
      },
    ]);

    // 7
    await queryInterface.bulkInsert("categories", [
      {
        name: "Wedding Sarees",
        parent_id: 2,
      },
    ]);

    // 8
    await queryInterface.bulkInsert("categories", [
      {
        name: "Bridesmaid Lehenga",
        parent_id: 2,
      },
    ]);

    // 9
    await queryInterface.bulkInsert("categories", [
      {
        name: "Bridal Gowns",
        parent_id: 2,
      },
    ]);

    // 10
    await queryInterface.bulkInsert("categories", [
      {
        name: "Men's Sherwani",
        parent_id: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
