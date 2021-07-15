const Embed = include('embed/index');

class Current {
    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Current
        };
        let embed = Embed.EmbedBuilder.build(request);
        request.message.channel.send(embed);
    }
    
}
module.exports = Current;