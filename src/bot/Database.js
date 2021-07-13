const model = require('../../Model/index');

class Database {

    static async createUser() {
        let result = await model.User.findOne({
            discordId: message.author.id
        });
        if (!result) {
            let newUser = new model.User({
                discordId: message.author.id,
                userName: message.author.username,
                avatarURL: message.author.avatarURL(),
                subreddits: []
            });
            return newUser.save();
        }
        return new Promise();
    }

    static async addSubreddit(link){
        let subreddit = await model.Subreddit.findOne({link: link});
        if(!subreddit){
            // TODO FETCH DATA FROM REDDIT API
            subreddit = new model.Subreddit({
                link:link,
                name: 'defaultName'
            });
        }
        return new Promise((_,__) => subreddit);
    }

    static async addSubredditToUser(UserID,link){
        //IF subreddit doesnt exist, create subreddit and add subredditID to user.subreddit_ids
        //IF subreddit exists, add the subredditID to user.subreddit_ids

    }

    static async findUser(discordID) {
        return model.User.findOne({
            discordId: discordID
        });
    }

    static async getUserSubreddits(discordID){
        let user = await findUser(discordID);
        let subreddit_ids = user.subreddit_ids;
        let subreddits = await model.Subreddit.find({ '_id': { $in: subreddit_ids } });
        console.log(subreddits);
    }

}

module.exports = Database;