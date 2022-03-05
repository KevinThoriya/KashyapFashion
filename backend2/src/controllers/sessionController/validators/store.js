const { celebrate, Segments, Joi } = require('celebrate');
const {emailValidator, passwordValidator } = require('../../userController/validators/commonValidator');

module.exports = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: emailValidator,
        password: passwordValidator
    })
});
