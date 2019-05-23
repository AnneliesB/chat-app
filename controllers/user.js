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

module.exports.getAll = getAll;