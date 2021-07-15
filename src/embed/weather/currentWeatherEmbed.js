const fr = require('../../localization/local_weather/french.json');
const en = require('../../localization/local_weather/english.json');
const unitSet = require('./unitSet');
const stringSub = require('../../util/stringSub');
const weatherFetcher = require('../../fetcher/weatherFetcher');
const createField = require('../createField');

class CurrentWeatherEmbed {
	static async execute(request, embed) {
		switch (request.user.lang) {
			case "en":
				this.trad_file = en;
				break;
			case "fr":
				this.trad_file = fr;
				break;
			default:
				this.trad_file = en;
		}
		this.unitset = unitSet[request.user.weather.unit]
		this.trad_file = this.trad_file.CurrentWeatherCommand;
		let data = await weatherFetcher.currentWeather(request)
		embed.setColor('#0099ff')
			.setTitle(this.trad_file.Title)
			.setDescription(stringSub(this.trad_file.Description, {
				city: data.name,
				description: `${data.weather[0].description}`,
				feels_like: `${data.main.feels_like}`,
				unit: `${this.unitset.temperature}`
			}))
			.setThumbnail(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
			.addFields(
				createField(`${this.trad_file.Min}`,
									  `${data.main.temp_min} ${this.unitset.temperature}`,
										 true),
				createField(`${this.trad_file.Current}`,
									  `${data.main.temp} ${this.unitset.temperature}`,
										true),
				createField(`${this.trad_file.Max}`,
									  `${data.main.temp_max} ${this.unitset.temperature}`,
									  true),

			).addField('\u200B', '\u200B')
			.addFields(
				createField(`${this.trad_file.Wind_speed}`,
									  `${data.wind.speed} ${this.unitset.speed}`,
										true),
				createField(`${this.trad_file.Humidity}`,
									  `${data.main.humidity} %`,
										true),
				createField(`${this.trad_file.Pressure}`,
									  `${data.main.pressure} ${this.unitset.pressure}`,
										true)
			);

	}

}
module.exports = CurrentWeatherEmbed;