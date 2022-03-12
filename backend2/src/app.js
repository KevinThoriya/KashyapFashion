let envPath;

if (process.env.NODE_ENV == "test") envPath = ".env.test";
else if (process.env.NODE_ENV == "production") envPath = ".env";
else envPath = ".env.dev";

require("dotenv").config({
  path: envPath,
});

/////////////////////////////////////

const express = require("express");
const cors = require("cors");
const path = require("path");
const { errors } = require("celebrate");
const http = require("http");

const EXpressCurdRoute = require("express-crud-router");
const ExpressCrudRouteSequelizeConnector = require("express-crud-router-sequelize-v6-connector");
const UserModel = require("./models/UserModel");
const { crud } = EXpressCurdRoute;
const sequelizeCrud = ExpressCrudRouteSequelizeConnector.default;

require("./database/sequelize/connection");

const pagarMeperiodicCheck = require("./services/pagarMe/periodicCheck");
const { socketConnection } = require("./websocket/socketConnection");
const routes = require("./routes");
const CategoryModel = require("./models/CategoryModel");
const AddressModel = require("./models/AddressModel");
const ProductModel = require("./models/ProductModel");
const ImageModel = require("./models/ImageModel");
const { Op } = require("sequelize");
const productsizemodel = require("./models/productsizemodel");

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: process.env.CORS_ORIGIN_URL }));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
socketConnection(server);
app.use(routes);

app.use(errors());

let filters = {
  email: (value) => ({
    [Op.iLike]: "%" + value + "%",
  }),
  name: (value) => {
    return {
      [Op.iLike]: "%" + value + "%",
    };
  },
  title: (value) => {
    return {
      [Op.iLike]: "%" + value + "%",
    };
  },
  html_body: (value) => {
    return {
      [Op.iLike]: "%" + value + "%",
    };
  },
};
app.use(
  crud("/kashyap/users", sequelizeCrud(UserModel), {
    filters,
  })
);
app.use(crud("/kashyap/categories", sequelizeCrud(CategoryModel), { filters }));
app.use(crud("/kashyap/address", sequelizeCrud(AddressModel), { filters }));
app.use(crud("/kashyap/products", sequelizeCrud(ProductModel), { filters }));
app.use(crud("/kashyap/photos", sequelizeCrud(ImageModel), { filters }));
app.use(crud("/kashyap/sizes", sequelizeCrud(productsizemodel), { filters }));

pagarMeperiodicCheck();

module.exports = server;
