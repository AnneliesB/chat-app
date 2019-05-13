const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    const user = new User({username: username, email: email});
    await user.setPassword(password);
    await user.save().then(result => {

        let token = jwt.sign({
            uid: result._id
        }, "secretword");
        res.json({
            "status": "succes",
            "data": {
                'token': token
            }
        })
    }).catch( error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
}
const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "That username doesn't exist"
            });
        }else{
            let token = jwt.sign({
                uid: result.user._id,
                username: result.user.username
            }, "secretword");
            return res.json({
                "status": "succes",
                "data": {
                    "token": token
                }
        })}
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        }) 
    });

}

module.exports.signup = signup;
module.exports.login= login;