const HelpCommand = require('./helpCommand');
const Current = require('./currentCommand');
const SettingsUpdateCommand = include('./commands/weather/settingsUpdateCommand');

class WeatherCommand {
	constructor(request) {
		switch (request.command.head) {
			case "help":
				this.help(request.next());
				break;
			case "current":
				this.getWeather(request.next());
				break;
			case "unit":
			case "loc":
				this.settingType = request.command.head.toString();
				this.updateSettings(request.next());
				break;
			default:
				this.invalidCommand();
		}
	}

	help(request) {
		HelpCommand.execute(request);
	}

	getWeather(request) {
		Current.execute(request);
	}

	updateSettings(request){
		request.settingType = this.settingType;
		SettingsUpdateCommand.execute(request);
	}

	invalidCommand() {

	}

}

module.exports = WeatherCommand;
