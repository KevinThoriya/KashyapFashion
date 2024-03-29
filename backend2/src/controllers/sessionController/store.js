const express = require("express");

const UserModel = require("../../models/UserModel");

/** @param {express.Request} req * @param {express.Response} res */
module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { email } });

    if (!user)
      return res.status(400).send({ message: "Credentials are Incorrect !" });

    const comparePassword = await user.checkPassword(password);

    if (!comparePassword)
      return res.status(400).json({ message: "Credentials are Incorrect !" });

    user.password = undefined;

    return res.json({
      user,
      token: user.generateToken(),
    });
  } catch (error) {
    console.error(new Date().toUTCString(), "-", error);
    return res.status(500).json({ message: "internal error" });
  }
};
