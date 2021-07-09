const {
	URL
} = require("url");
const fetch = require("node-fetch");
const {
	MessageEmbed
} = require('discord.js');
const dotenv = require("dotenv");
dotenv.config();
const config = require('../../config.json');
const {Connection} = require('../bot/Connection');

class Weather {
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

	constructor(message) {
		this.unit = config.weather.unit;
		this.unitShow = this.unitset[this.unit]
		this.location = config.weather.location;
		this.lang = config.weather.lang;
		this.weather_token = process.env.WEATHER_TOKEN;
		this.message = message;
	}

	/**
	 * @author SaschaAlex
	 */
	async fetchWeatherApi(command) {
		let connection = new Connection();
		const url = new URL(`https://api.openweathermap.org/data/2.5/${command}`);
		url.searchParams.append("q", this.location);
		url.searchParams.append("units", this.unit);
		url.searchParams.append("lang", this.lang);
		url.searchParams.append("appid", this.weather_token);
		const res = await fetch(url);
		const json = await res.json();
		return json;
	}

	embededCurrent(body) {
		return new MessageEmbed() // TODO replace this for an object
			.setColor('#0099ff')
			.setTitle("Curent weather")
			.setDescription(`The current weather for ${body.name} is ${body.weather[0].description} and it
			feels like ${body.main.feels_like} ${this.unitShow.temperature}.`)
			.setThumbnail(`https://openweathermap.org/img/wn/${body.weather[0].icon}@4x.png`)
			.addField("Temperature for today", '\u200B')
			.addFields({
				name: 'Min',
				value: `${body.main.temp_min} ${this.unitShow.temperature}`,
				inline: true
			}, {
				name: 'Current',
				value: `${body.main.temp} ${this.unitShow.temperature}`,
				inline: true
			}, {
				name: 'Max',
				value: `${body.main.temp_max} ${this.unitShow.temperature}`,
				inline: true
			}, )
			.addField('\u200B', '\u200B')
			.addFields({
				name: 'Wind Speed',
				value: `${body.wind.speed} ${this.unitShow.speed}`,
				inline: true
			}, {
				name: 'Humidity',
				value: `${body.main.humidity} %`,
				inline: true
			}, {
				name: 'Pressure',
				value: `${body.main.pressure} ${this.unitShow.pressure}`,
				inline: true
			})
			.setTimestamp();
	}


}

module.exports = {
	Weather: Weather
};