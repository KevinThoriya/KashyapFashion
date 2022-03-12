const { Model, DataTypes } = require("sequelize");

const calcFinalPrice = require("../util/calcFinalPrice");
const isOnSale = require("../util/isOnSale");

const OrdersProducts = require("./OrdersProductsModel");
const productsizemodel = require("./productsizemodel");

class ProductModel extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        quantity_stock: DataTypes.INTEGER,
        html_body: DataTypes.TEXT,
        description: DataTypes.STRING,
        quantity_sold: DataTypes.INTEGER,
        // sizes

        // unused at the moment
        discount_percent: DataTypes.DECIMAL,
        discount_datetime_start: DataTypes.DATE,
        discount_datetime_end: DataTypes.DATE,
        finalPrice: DataTypes.VIRTUAL,
        isOnSale: DataTypes.VIRTUAL,
        dateNow: DataTypes.VIRTUAL,
      },
      {
        tableName: "products",
        hooks: {
          afterFind(product) {
            if (product) {
              const dateNow = new Date();
              if (Array.isArray(product)) {
                for (const prod of product) {
                  prod.price = Number(prod.price).toFixed(2);
                  prod.isOnSale = isOnSale(prod);
                  if (prod.isOnSale)
                    prod.finalPrice = String(
                      calcFinalPrice(prod.price, prod.discount_percent)
                    );
                  else prod.finalPrice = Number(prod.price).toFixed(2);
                  prod.dateNow = dateNow;
                }
              } else {
                product.price = Number(product.price).toFixed(2);
                product.isOnSale = isOnSale(product);
                if (product.isOnSale)
                  product.finalPrice = calcFinalPrice(
                    product.price,
                    product.discount_percent
                  );
                else product.finalPrice = Number(product.price).toFixed(2);
                product.dateNow = dateNow;
              }
            }
          },
        },
        sequelize: connection,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    console.log("models ===== ==== = == ===", models);
    this.belongsToMany(models.OrderModel, {
      through: OrdersProducts,
      foreignKey: "product_id",
      as: "orders",
    });

    this.belongsTo(models.CategoryModel, {
      foreignKey: "",
      as: "category",
    });

    this.hasMany(models.ImageModel, {
      foreignKey: "product_id",
      as: "images",
    });
    this.belongsToMany(models.productSizeModel, {
      through: "ProductSizeProduct",
      as: "size_ids",
    });
  }
}

module.exports = ProductModel;
