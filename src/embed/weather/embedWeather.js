const WeatherEmbedType = require('./weatherEmbedType');
const HelpEmbed = require('./helpembed');

class EmbedWeather {
	static execute(request,embed){
		switch(request.embedParams.embedType){
			case WeatherEmbedType.Current:
				// TODO
				break;
			case WeatherEmbedType.Help:
				HelpEmbed.execute(request,embed);
				break;
			default:
				// TODO
		}

	}
}

module.exports = EmbedWeather;