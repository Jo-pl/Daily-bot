const fr = require('../../localization/local_weather/french.json');
const en = require('../../localization/local_weather/english.json');
const unitSet = require('./unitSet');

const createField = require('../createField');

class CurrentWeatherEmbed {
	static execute (request,embed){
		console.log("Me at HelpEmbed");
		switch(request.user.lang){
			case "en":
        this.trad_file = en;
				break;
			case "fr":
        this.trad_file = fr;
				break;
			default:
				this.trad_file = en;
		}
		embed
			.setColor('#0099ff')
			.setTitle(this.trad_file.Title)
			.setDescription(this.trad_file.Description)
			.addFields(
                createField('Min',`${this.trad_file.Help}`),
                createField('Current',`${this.trad_file.Current}`),
                createField('Max',`${this.trad_file.Day}`),
            ).addField('\u200B', '\u200B')
            .addFields(
                createField('Wind Speed',`${this.trad_file.Help}`),
                createField('Humidity',`${this.trad_file.Current}`),
                createField('Pressure',`${this.trad_file.Day}`),
    );
	}

}
module.exports = CurrentWeatherEmbed;