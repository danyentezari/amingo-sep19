const express = require('express');
const User = require('../models/User');
const Tweet = require('../models/Tweets');

const router = express.Router();

router.post('/post', (req, res) =>{

    let tweet;

    // Step 1: Find the user
    User
        // Find the user by id
        .findOne({ _id: req.user._id })
        // If we find match...
        .then((user)=>{

            // Create a tweet model 
            tweet = new Tweet({
                user,
                text: req.body.text,
                photo: req.body.photo,
                link: req.body.link
            })

            // Push the tweet id into the user.tweets array
            user.tweets.push(tweet);

            // Update the user with a tweet ObjectID AND
            // save the tweet
            Promise.all(
                [user.save(), tweet.save()]
            )

            // Once all of promises have been resolved
            // console.log some message
            .then(()=>{
                console.log("Tweet saved")
            })

            // Otherwise, if something goes wrong, console.log
            // an error message
            .catch(err=> {
                console.log('err', err)
            });
        })
});

module.exports = router;