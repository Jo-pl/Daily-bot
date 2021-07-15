const Embed = include('embed/index');

class HelpCommand {

    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Help
        };
        let embed = Embed.EmbedBuilder.build(request);
        request.message.channel.send(embed);

    }
}

module.exports = HelpCommand;