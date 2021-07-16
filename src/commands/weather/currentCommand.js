const Embed = include('embed/index');


/**
 * @typedef {object} Request
 */

class Current {
    /**
     * @author SaschaAlex,MisterJo
     * @param {Request} request
     * @static 
     */
    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Current
        };
        Embed.EmbedBuilder.build(request).then((embed) =>{
            request.message.channel.send(embed);
        });
    
    }
    
}
module.exports = Current;