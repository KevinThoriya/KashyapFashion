import express from "express";
import fileUpload from "express-fileupload";
import userRoute from "./components/customer/userRoutes.js";
import sequelize from "./utils/db.js";
import EXpressCurdRoute from 'express-crud-router';
import ExpressCrudRouteSequelizeConnector from 'express-crud-router-sequelize-v6-connector';
import User from "./components/customer/userSchema.js";

const app = express();
const { crud } = EXpressCurdRoute;
const sequelizeCrud = ExpressCrudRouteSequelizeConnector.default;
const PORT = process.env.PORT || 3300;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use('/customer', userRoute);

app.use(crud('/admin/users', sequelizeCrud(User)))

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
})();

sequelize.sync({ alter: true })