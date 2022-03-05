const { celebrate, Segments, Joi } = require('celebrate');
const passwordValidator = Joi.string().required().min(3);
const emailValidator = Joi.string().email().required();

module.exports = {
    passwordValidator,
    emailValidator
}