const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
/* GET users listing. */
router.get('/', userController.getAll);
router.post('/login', authController.login);
router.post('/signup', authController.signup);
module.exports = router;
