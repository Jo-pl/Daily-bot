
const {weather} = include('localization/index');
const createField = require('../createField');

class HelpEmbed{

	static execute (request,embed){
		switch(request.user.lang){
			case "en":
        this.trad_file = weather.en.HelpCommand;
				break;
			case "fr":
        this.trad_file = weather.fr.HelpCommand;
				break;
			default:
				this.trad_file = weather.en.HelpCommand;
		}
		
		embed
		  .setColor('RANDOM')
			.setTitle(this.trad_file.Title)
			.setDescription(this.trad_file.Description)
			.addFields(
        createField('Help',`${this.trad_file.Help}`),
        createField('Current',`${this.trad_file.Current}`),
        createField('Day',`${this.trad_file.Day}`),
        createField('Week',`${this.trad_file.Week}`),
        createField('Unit',`${this.trad_file.Unit}`),
        createField('Lang',`${this.trad_file.Lang}`),
        createField('Loc',`${this.trad_file.Loc}`)
      );
	}

}
module.exports = HelpEmbed;