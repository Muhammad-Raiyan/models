const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const tweetSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },

    childType: {
        type: String,
        default: null
    },

    parent: this,

    usersWhoLiked: [{
        username: String,
        id: mongoose.Schema.Types.ObjectId
    }],
    
    media: [{
        type: mongoose.Schema.Types.ObjectId
    }]
});

tweetSchema.plugin(timestamps);
module.exports = mongoose.model('tweets', tweetSchema);
