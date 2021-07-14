class EmbedWeather {
	unitset = {
		default: {
			temperature: "K",
			pressure: "hPa",
			speed: "m/s"

		},
		metric: {
			temperature: "°C",
			pressure: "hPa",
			speed: "m/s"
		},
		imperial: {
			temperature: "°F",
			pressure: "hPa",
			speed: "mile/hour"
		}
	}
	constructor(channel,){

	}
}

modules.exports = {EmbedWeather : EmbedWeather};