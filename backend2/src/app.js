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

const EXpressCurdRoute =  require('express-crud-router');
const ExpressCrudRouteSequelizeConnector = require('express-crud-router-sequelize-v6-connector');
const UserModel = require('./models/UserModel');
const { crud } = EXpressCurdRoute;
const sequelizeCrud = ExpressCrudRouteSequelizeConnector.default;


require("./database/sequelize/connection");

const pagarMeperiodicCheck = require("./services/pagarMe/periodicCheck");
const { socketConnection } = require("./websocket/socketConnection");
const routes = require("./routes");
const CategoryModel = require("./models/CategoryModel");
const AddressModel = require("./models/AddressModel");
const ProductModel = require("./models/ProductModel");

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: process.env.CORS_ORIGIN_URL }));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

socketConnection(server);
app.use(routes);

app.use(errors());

app.use(crud('/kashyap/users', sequelizeCrud(UserModel)))
app.use(crud('/kashyap/categories', sequelizeCrud(CategoryModel)))
app.use(crud('/kashyap/address', sequelizeCrud(AddressModel)))
app.use(crud('/kashyap/products', sequelizeCrud(ProductModel)))

pagarMeperiodicCheck();

module.exports = server;
