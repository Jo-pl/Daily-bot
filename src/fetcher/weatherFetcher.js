const {URL} = require("url");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

class WeatherFetcher{
	static apiKey = process.env.WEATHER_TOKEN;

	static async currentWeather({user : user}){
			const url = new URL('https://api.openweathermap.org/data/2.5/weather');
			url.searchParams.append("q", user.weather.loc);
			url.searchParams.append("units", user.weather.unit);
			url.searchParams.append("lang", user.lang);
			url.searchParams.append("appid", WeatherFetcher.apiKey);
			const res = await fetch(url);
			const json = await res.json();
			return json;
	}
}

module.exports = WeatherFetcher;