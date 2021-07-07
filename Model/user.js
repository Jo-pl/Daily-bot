const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
	discordId: Number ,
    userName: String ,
    avatarUrl: String,
    subreddits:[{
        id:Number,
        name:String,
    }],
});

const User = model('User', UserSchema);

module.exports = User;