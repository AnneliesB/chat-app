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

module.exports.getAll = getAll;
module.exports.getProfile = getProfile;