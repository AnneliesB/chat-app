const express = require('express');
const passport = require("../passport/passport");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
/* GET users listing. */
router.get('/', userController.getAll);
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.getProfile);
router.put('/profile', passport.authenticate('jwt', { session: false }), userController.updateProfile);

module.exports = router;
