import express from "express";
import fileUpload from "express-fileupload";
import userRoute from "./components/customer/userRoutes.js";
import sequelize from "./utils/db.js";

const PORT = process.env.PORT || 3300;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use('/customer', userRoute);

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
