const {
	HelpCommand
} = require('./helpCommand');
const {
	Current
} = require('./currentCommand');

class WeatherCommand {
	constructor([message, [command, ...args]]) {
		switch (command) {
			case "help":
				this.help();
				break;
			case "current":
				this.getWeather([message, args]);
				break;
			default:
				this.invalidCommand();
		}
	}

	execute() {

	}

	help() {
		HelpCommand.execute();
	}
	getWeather([message]) {
		Current.execute(message);
	}
	invalidCommand() {

	}

}

module.exports = {
	WeatherCommand: WeatherCommand
};