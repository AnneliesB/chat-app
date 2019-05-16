var express = require('express');
var router = express.Router();
let messageController = require('../controllers/message');


// router GET: /api/v1/messages OR /api/v1/messages?user=username
router.get('/', messageController.get);

// router GET: /api/v1/messages/:id
router.get('/:id', messageController.getid);

// router POST: /api/v1/messages
router.post('/', messageController.post);

// router PUT: /api/v1/messages/:id
router.put('/:id', messageController.putid);

// router DELETE: /api/v1/messages/:id
router.delete('/:id', messageController.del);


module.exports = router;