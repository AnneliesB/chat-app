const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
   email: {
       type: String,
       required: true
   },
   motto: {
       type: String,
       required: false
   },
   avatar: {
    type: String,
    required: false
}
});
User.plugin(passportLocalMongoose, {selectFields: "email"});

module.exports = mongoose.model('User', User);