const User = require("../models/User");

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "succes"
        })
    }).catch( error => {
        res.json({
            "status": "error"
        })
    });
}

module.exports.signup = signup;