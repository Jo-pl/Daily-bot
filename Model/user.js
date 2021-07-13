const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
	discordId: Number ,
    userName: String ,
    avatarURL: String,
    subreddit_ids: [Number],
});

const User = model('User', UserSchema);

module.exports = User;