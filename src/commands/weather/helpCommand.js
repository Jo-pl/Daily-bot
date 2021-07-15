const Embed = include('embed/index');

class HelpCommand {

    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Help
        };
        Embed.EmbedBuilder.build(request).then((embed) => {
            request.message.channel.send(embed);
        });

    }
}

module.exports = HelpCommand;