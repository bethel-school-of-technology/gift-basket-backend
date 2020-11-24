//VALIDATION
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
     const schema = {
          name: Joi.string()
               .min(6)
               .required(),
     email: Joi.string()
               .min(6)
               .required()
               .email(),
     password: Joi.string()
               .min(6)
               .required()
     };
     return Joi.ValidationError(data, schema );
};

const loginValidation = (data) => {
     const schema = {
          email: Joi.string()
               .min(6)
               .required()
               .email(),
          password: Joi.string()
               .min(6)
               .required()
     };
     return Joi.Validate(data, schema );
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;