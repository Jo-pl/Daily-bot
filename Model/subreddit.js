const {Schema , model} = require('mongoose');

const SubredditSchema = new Schema({
    id: Number,
    name: String,
    link: String
});

const Subreddit = model('Subreddit', SubredditSchema);

module.exports = Subreddit;