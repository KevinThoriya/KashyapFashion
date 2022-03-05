const { celebrate, Segments, Joi } = require('celebrate');
const {emailValidator, passwordValidator } = require('./commonValidator');

module.exports = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: emailValidator, 
        password: passwordValidator,
        mobile : Joi.number().required(),
    }),
});
