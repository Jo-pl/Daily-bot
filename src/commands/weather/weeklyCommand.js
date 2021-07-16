const Embed = include('embed/index');

class Weekly{
	static execute(request){
		request.embedParams = {
			type : Embed.EmbedType.Weather, 
			embedType : Embed.WeatherEmbedType.Weekly
		};
		//TODO

	}
}

module.exports = Weekly;