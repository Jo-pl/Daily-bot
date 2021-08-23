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

    static async changeUserWeatherSettings(discordID,weatherObject){
        const filter = { discordId: discordID };
        const update = { weather: weatherObject };
        let user = await model.User.findOneAndUpdate(filter, update, {
            new: true
        }).exec();
    }

    static async changeUserLocalizationSettings(discordID,lang){
        const filter = { discordId: discordID };
        const update = { lang: lang };
        let user = await model.User.findOneAndUpdate(filter, update, {
            new: true
        }).exec();
    }


}

module.exports = Database;