import { DataTypes, Model } from "sequelize";
import sequelize from "../../utils/db.js";
import bcrypt from "bcrypt";

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password_hash: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      set(value) {
        let salt = bcrypt.genSaltSync(10);
        let hashPassword = bcrypt.hashSync(value, salt);

        this.setDataValue('password_hash',value);
        this.setDataValue("salt", salt);
        this.setDataValue("password", hashPassword);
      },
    },
    mobile: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
  },
  {
    sequelize,
    tableName: "users",
    paranoid: true,
  }
);

export default User;
