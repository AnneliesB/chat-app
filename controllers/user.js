const User = require("../models/User");

const getAll = (req, res) => {
    User.find({}, (err, docs) =>{
        if(!err){
            res.json({
            "status": "success",
            "data": {
                "users": docs
            }
            })
        }
    });
}
const getProfile = (req, res) =>{
    res.json({
        "status": "success",
        "user": req.user
    });
}

const updateProfile = (req, res) => {
    User.findByIdAndUpdate(req.user._id, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.json({
                "status": "succes",
                "motto": req.body.motto
            })
        }
    });
}
module.exports.getAll = getAll;
module.exports.getProfile = getProfile;
module.exports.updateProfile = updateProfile;