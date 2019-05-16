var express = require('express');
var router = express.Router();
let messageController = require('../controllers/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// show all chats and get current chats
router.get('/', messageController.get);


module.exports = router;
