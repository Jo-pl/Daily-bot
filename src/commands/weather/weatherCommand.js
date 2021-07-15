const HelpCommand = require('./helpCommand');
const Current = require('./currentCommand');

class WeatherCommand {
	constructor(request) {
		switch (request.command.head) {
			case "help":
				this.help(request.next());
				break;
			case "current":
				this.getWeather(request.next());
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
	invalidCommand() {

	}

}

module.exports = WeatherCommand;
