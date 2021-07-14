const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
	discordId: String ,
    userName: String ,
    avatarURL: String,
    subreddit_ids: {type : [Number], default : []},
    lang : {type : String , default : 'en'},
    weather : {
        unit : {type : String, default : 'default'},
        location : {type : String , default : 'montreal'}
    }
});

const User = model('User', UserSchema);

module.exports = User;