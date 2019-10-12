const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    retweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    photo: {
        type: String
    },
    link: {
        type: String
    },
    meta: {
        type: Object
    }
});

module.exports = Tweets = mongoose.model('tweets', TweetSchema);