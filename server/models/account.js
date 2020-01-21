var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Account = new Schema({
    user_id: String,
    user_name: String,
    password: String,
    salt: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('account', Account);