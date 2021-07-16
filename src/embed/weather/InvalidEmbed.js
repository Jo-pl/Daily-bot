const {weather} = include('localization/index');
const createField = require('../createField');
const stringSub = require('../../util/stringSub');

class InvalidEmbed{

	static async execute (request,embed){
		switch(request.user.lang){
			case "en":
        this.trad_file = weather.en.Invalid;
				break;
			case "fr":
        this.trad_file = weather.fr.Invalid;
				break;
			default:
				this.trad_file = weather.en.Invalid;
		}
		
		embed
		  .setColor("#FF0000")
			.setTitle(this.trad_file.Title)
			.setDescription(stringSub(this.trad_file.Description, {
				symbol : "$"
			}))
			.addFields(createField(
				this.trad_file.Error ,
				 request.message.content
			));
	}

}
module.exports = InvalidEmbed;