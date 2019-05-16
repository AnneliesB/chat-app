const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    }
});

const Message = mongoose.model("Message", messageSchema)

module.exports = Message;