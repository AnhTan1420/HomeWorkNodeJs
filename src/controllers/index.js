const { required } = require('joi');

module.exports.authController = require('./auth.controller');
module.exports.userController = require('./user.controller');
module.exports.studentController = require('./student.controllers');
module.exports.classController = require("./class.controller");
module.exports.detaiController = require("./detai.controller");