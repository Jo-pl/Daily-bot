const Embed = include('embed/index');

/**
 * @typedef {object} Request
 */


class HelpCommand {
    /**
     * @author SaschaAlex,MisterJo
     * @param {Request} request
     * @static 
     */
    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Help
        };
        async function run(){
            let embed = await Embed.EmbedBuilder.build(request);
            let message = await request.message.channel.send(embed);  
        }
        run();

    }
}

module.exports = HelpCommand;