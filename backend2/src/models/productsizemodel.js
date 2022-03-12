"use strict";
const { Model, DataTypes } = require("sequelize");
const product = require("./ProductModel");

class productSizeModel extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "productSizeModels",
        sequelize: connection,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.ProductModel, {
      through: "ProductSizeProduct",
      as: "product_ids",
    });
  }
}

module.exports = productSizeModel;
