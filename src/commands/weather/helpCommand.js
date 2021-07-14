const EmbedBuilder = require('../../embed/embedBuilder');
const EmbedType = require('../../embed/embedType');
const WeatherEmbedType = require('../../embed/weather/weatherEmbedType');

class HelpCommand {

    static execute(request) {
        request.embedParams = {
            type : EmbedType.Weather, 
            embedType : WeatherEmbedType.Help
        };
        new EmbedBuilder(request);

    }
}

module.exports = {
    HelpCommand: HelpCommand
};