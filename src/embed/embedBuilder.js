const EmbedType = require('./embedType');
const {MessageEmbed} = require('discord.js');
const EmbedWeather = require('./weather/embedWeather');
class EmbedBuilder {
    constructor(request) {
        
        //Create the embed
        this.embed = new MessageEmbed();
        this.embed.setTimestamp();
        switch(request.embedParams.type){
            case EmbedType.Weather:
                EmbedWeather.execute(request,this.embed);
                break;
            case EmbedType.Reddit:
                // TODO
                break;
            default:
                // TODO
        }
        
    }
}

module.exports = EmbedBuilder;