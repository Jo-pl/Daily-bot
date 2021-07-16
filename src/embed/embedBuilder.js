const {MessageEmbed} = require('discord.js');
const EmbedType = require('./embedType');
const EmbedWeather = require('./weather/embedWeather');


class EmbedBuilder {

  static async build(request){
    
    this.embed = new MessageEmbed();
    this.embed.setTimestamp();
    switch(request.embedParams.type){
        case EmbedType.Weather:
            await EmbedWeather.execute(request,this.embed);
            break;
        case EmbedType.Reddit:
            // TODO
            break;
        default:
            // TODO
    }
    return this.embed;

    }
}

module.exports = EmbedBuilder;