const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const followerSchema = mongoose.Schema({
    username: {
        type: String
    },
    
    followers: [{
        username: String,
        id: String
    }]
});

followerSchema.plugin(timestamps);
module.exports = mongoose.model('followers', followerSchema);
