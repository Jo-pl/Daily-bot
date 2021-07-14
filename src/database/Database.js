const model = require('../../Model/index');

class Database {

    static async createUser(message) {
        let result =  await model.User.findOne({"discordId": message.author.id}).exec();
        if (!result) {
            let newUser = new model.User({
                discordId: message.author.id,
                userName: message.author.username, 
                avatarURL: message.author.avatarURL(),
            });
            await newUser.save();
            return newUser
        }
        return result;
    }

    static async findUser(discordID) {
        return model.User.findOne({
            discordId: discordID
        }).exec();
    }
}

module.exports = Database;