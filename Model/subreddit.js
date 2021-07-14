const {Schema , model} = require('mongoose');

const SubredditSchema = new Schema({
    id: String,
    name: String,
    link: String
});

const Subreddit = model('Subreddit', SubredditSchema);

module.exports = Subreddit;