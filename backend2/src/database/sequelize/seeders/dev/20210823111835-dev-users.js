"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Kevin Thoriya",
        email: "kevin@kashyap.com",
        mobile: "9793813806",
        admin: true,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jay Thoriya",
        email: "jau@kashyap.com",
        mobile: "9794313806",
        admin: true,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Numan Roie",
        email: "roie@kashyap.com",
        mobile: "1293813306",
        admin: false,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ragna floki",
        email: "ragna@kashyap.com",
        mobile: "212131232",
        admin: true,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Lagtha",
        email: "lagth@kashyap.com",
        mobile: "979382336",
        admin: true,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "test user",
        email: "test@kashyap.com",
        mobile: "9793813806",
        admin: true,
        password: bcrypt.hashSync("123", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
