const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const followingSchema = mongoose.Schema({
    username: {
        type: String
    },
    
    following: [{
        username: String,
        id: String
    }]
});

followingSchema.plugin(timestamps);
module.exports = mongoose.model('following', followingSchema);
