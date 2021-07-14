const fr = require('./french.json');
const en = require('./english.json');
class HelpEmbed{

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
		request.message.channel.send(embed.setColor('RANDOM')
			.setTitle(this.trad_file.Title)
			.setDescription(this.trad_file.Description)
			.addFields(
        HelpEmbed.createField('Help',`${this.trad_file.Help}`),
        HelpEmbed.createField('Current',`${this.trad_file.Current}`),
        HelpEmbed.createField('Day',`${this.trad_file.Day}`),
        HelpEmbed.createField('Week',`${this.trad_file.Week}`),
        HelpEmbed.createField('Unit',`${this.trad_file.Unit}`),
        HelpEmbed.createField('Lang',`${this.trad_file.Lang}`),
        HelpEmbed.createField('Loc',`${this.trad_file.Loc}`)
      ));
	}

  static createField(name,value,inline = false){
    return {name:name,
            value:value,
            inline:inline};
  }

}
module.exports = HelpEmbed;