class Weather{
	unitset = {
		default : {
			temperature : "K",
			pressure    : "hPa",
			speed       : "m/s"

		},
		metric : {
			temperature : "°C",
			pressure    : "hPa",
			speed       : "m/s"
		},
		imperial : {
			temperature : "°F",
			pressure    : "hPa",
			speed       : "mile/hour"
		} 
	}
	constructor(weatherConfig,weather_token) {
		this.unit = this.unitset[weatherConfig.unit] 
		? unitset.default : this.unitset[weatherConfig.unit];
		this.unitName = weatherConfig.unit
		this.location = weatherConfig.location;
		this.lang = weatherConfig.lang;
		this.weather_token = weather_token;
	}

	async fetchWeatherApi(command){ 
    const url = new URL(`https://api.openweathermap.org/data/2.5/${command}`);
    url.searchParams.append("q",this.location);
    url.searchParams.append("units",this.unitName);
    url.searchParams.append("lang",this.lang);
    url.searchParams.append("appid",this.weather_token);
    const res  = await fetch(url);
    const json = await res.json();
    return json;
}

	embededCurrent(body){
	return new Discord.MessageEmbed() // TODO relace this for an object
			.setColor('#0099ff')
			.setTitle("Curent weather")
			.setDescription(`The current weather for ${body.name} is ${body.weather[0].description} and it
			feels like ${body.main.feels_like} ${this.unit.temperature}.`)
			.setThumbnail(`https://openweathermap.org/img/wn/${body.weather[0].icon}@4x.png`)
			.addField("Temperature for today",'\u200B')
			.addFields(
					{ name: 'Min', value : `${body.main.temp_min} ${this.unit.temperature}`,inline : true },
					{ name: 'Current', value: `${body.main.temp} ${this.unit.temperature}`, inline: true },
					{ name: 'Max', value : `${body.main.temp_max} ${this.unit.temperature}`, inline: true },
			)
			.addField('\u200B','\u200B')
			.addFields(
					{ name: 'Wind Speed',value :  `${body.wind.speed} ${this.unit.speed}`,inline : true},
					{ name: 'Humidity', value : `${body.main.humidity} %`,inline : true },
					{ name: 'Pressure', value: `${body.main.pressure} ${this.unit.pressure}`, inline: true }
			)
			.setTimestamp();
}


}