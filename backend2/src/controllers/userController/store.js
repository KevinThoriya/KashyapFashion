const express = require("express");

const UserModel = require("../../models/UserModel");
const { sendEmailQueue } = require("../../backgroundJobs/queues");
const userRegisterTemplate = require("../../services/mailer/templates/userRegisterTemplate");
const saltRounds = 10;
const bcrypt = require('bcrypt');


/** @param {express.Request} req * @param {express.Response} res */

const AsyncSendMail = async (email,template) => { 
  sendEmailQueue.add({
    from: "kashyapfashion@gmail.com",
    to: email,
    subject: "Kashyap Fashion",
    template,
  });
}


module.exports = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { email } });

    if (user) return res.status(400).json({ message: "email already in use" });

    const hash = bcrypt.hashSync(password, saltRounds);

    const newUser = await UserModel.create({ name, email, mobile, password: hash });

    newUser.password = undefined;

    const template = userRegisterTemplate(newUser.name);

    AsyncSendMail(newUser.email, template);

    return res.json({ user: newUser, token: newUser.generateToken() });
  } catch (error) {
    console.error(new Date().toUTCString(), "-", error);
    return res.status(500).json({ message: "internal error" });
  }
};


