const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: Joi.string().email().required(), 
        password: Joi.string().required().min(3),
        mobile : Joi.number().required(),
    }),
});
