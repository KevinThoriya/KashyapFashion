const express = require("express");

const UserModel = require("../../models/UserModel");


/** @param {express.Request} req * @param {express.Response} res */
module.exports = async (req, res) => {
  const { id } = req.tokenPayload;
  const { name, email, currentPassword, newPassword, mobile } = req.body;


  try {
    let password;
    const user = await UserModel.findByPk(id);

    if (!user) return res.status(400).json({ message: "user not found" });

    if (currentPassword && newPassword) {
      if (await user.checkPassword(currentPassword)) {
        password = newPassword;
      } else {
        return res.status(400).json({ message: "wrong current password" });
      }
    }

    if (!password) password = undefined;

    const updated = await user.update(
      {
        name,
        email,
        mobile,
        password,
      },
      {
        individualHooks: true,
      }
    );

    return res.json(updated);
  } catch (error) {
    console.error(new Date().toUTCString(), "-", error);
    return res.status(500).json({ message: "internal error" });
  }
};
