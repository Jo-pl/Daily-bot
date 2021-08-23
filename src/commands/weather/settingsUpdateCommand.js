const Embed = include('embed/index');
const Database = include('database/Database');
const Discord = require('discord.js');
const fr = require('../../localization/local_weather/french.json');
const en = require('../../localization/local_weather/english.json');

class SettingsUpdateComand {

    static execute(request) {
        switch (request.user.lang) {
			case "en":
				this.trad_file = en;
				break;
			case "fr":
				this.trad_file = fr;
				break;
			default:
				this.trad_file = en;
		}
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Settings
        };
        Embed.EmbedBuilder.build(request).then(async (embed) => {
            let message = await request.message.channel.send(embed);
            message.react('✅');
            message.react('❌');
            message.awaitReactions((reaction,user)=>{return ['✅', '❌'].includes(reaction.emoji.name) && request.message.author.id === user.id},
            { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === '✅') {
                    let weatherObject = request.user.weather;
                    let testing = request.command.rest.join(' ');
                    console.log(testing);
                    switch(request.settingType){
                        case 'unit':
                            weatherObject.unit = [request.command.head, ...request.command.rest].join(' ')
                            Database.changeUserWeatherSettings(request.message.author.id,weatherObject).then(this.sendSettingsSaved(message,request));
                            break;
                        case 'loc':
                            weatherObject.loc = [request.command.head, ...request.command.rest].join(' ')
                            Database.changeUserWeatherSettings(request.message.author.id,weatherObject).then(this.sendSettingsSaved(message,request));
                            break;
                        case 'lang':
                            Database.changeUserLocalizationSettings(request.message.author.id,request.command.head).then(this.sendSettingsSaved(message,request));
                            break;
                        default:
                            console.log('Switch settings error');
                            break;
                    }    
                } else {
                    let embed = new Discord.MessageEmbed()
                    .setTitle(this.trad_file.SettingsWeatherCommand.Title)
                    .setDescription(this.trad_file.SettingsWeatherCommand.Canceled)
                    .setTimestamp();
                    message.edit(embed);
                    this.deleteMessage(message,request.message);
                }
            }).catch(collected => {
                let embed = new Discord.MessageEmbed()
                .setTitle(this.trad_file.SettingsWeatherCommand.Title)
                .setDescription(this.trad_file.SettingsWeatherCommand.Expired)
                .setTimestamp();
                message.edit(embed);
                this.deleteMessage(message,request.message);
            });
        });

    }

    static async sendSettingsSaved(message,request){
        let embed = new Discord.MessageEmbed()
        .setTitle(this.trad_file.SettingsWeatherCommand.Title)
        .setDescription(this.trad_file.SettingsWeatherCommand.Saved)
        .setTimestamp();
        message.edit(embed);
        this.deleteMessage(message,request.message);
    }

    static deleteMessage(message,originalMessage){
        new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve();
            },3000);
        }).then(() =>{message.delete();originalMessage.delete();});
    }
}

module.exports = SettingsUpdateComand;