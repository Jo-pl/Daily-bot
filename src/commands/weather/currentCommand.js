const {Weather} = require("../../weather/weather");
const EmbedBuilder = require("../../embed/embedBuilder");
const EmbedType = require("../../embed/embedType");
const WeatherEmbedType = require("../../embed/weather/weatherEmbedType");

class Current {
    static execute(request) {
        request.embedParams = {
            type : EmbedType.Weather, 
            embedType : WeatherEmbedType.Current
        };
        new EmbedBuilder(request);
    }
    
}
module.exports = {
    Current: Current
};