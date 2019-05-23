
const Message = require("../models/Message");

// GET: /api/v1/messages OR /api/v1/messages?user=username
let get = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                },
                "currentUser": req.user._id
            });
        }
    });
    /*
    if (req.query.user) {
        let username = req.query.user;
        res.json({
            "status": "success",
            "message": "GETTING message for username: " + username
        });
    } else {
        res.json({
            "status": "success",
            "message": "GETTING messages"
        });
    }
    */
};

// GET: /api/v1/messages/:id
let getid = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": "GETTING messages with ID: " + id
    });
};

// POST: /api/v1/messages
let post = (req, res) => {
    let message = new Message();

    message.user = req.user._id;
    message.username = req.user.username;
    message.message = req.body.message;
    message.date = new Date();

    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": err
            });
        } 
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                },
                "currentUser": req.user._id
            });
        }
    });
};

// PUT: /api/v1/messages/:id
let putid = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "message": "UPDATING a message with ID: " + id
    });
};

// DELETE: /api/v1/messages/:id
let del = (req, res)=> {
    let id = req.params.id;
    Message.remove({_id: id}, (err) => {
        if (err) return res.status(500).send(err);
        if(!err){
            res.json({
                "status": "success",
                "message": "DELETING a message with ID: " + id
            });
        }
    });
}


module.exports.get = get;
module.exports.getid = getid;
module.exports.post = post;
module.exports.putid = putid;
module.exports.del = del;