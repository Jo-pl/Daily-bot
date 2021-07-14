const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
	discordId: String ,
    userName: String ,
    avatarURL: String,
    subreddit_ids: {type : [Number], default : []},
    weather : {
        unit : {type : String, default : 'default'},
        location : {type : String , default : 'montreal'},
        lang : {type : String , default : 'en'}
    }
});

const User = model('User', UserSchema);

module.exports = User;