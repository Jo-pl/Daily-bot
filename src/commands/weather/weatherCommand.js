const HelpCommand = require('./helpCommand');
const Current 		= require('./currentCommand');
const Weekly  		= require('./weeklyCommand');
const Invalid     = require('./invalidCommand');

/**
 * @typedef {object} Request
 */

/**
 * @description shall spawn the 
 * the correct weather command
 * @author SaschaAlex,MisterJo
 */
class WeatherCommand {
	/**
	 * @param {Request} request 
	 * @return WeatherCommand
	 */
	constructor(request) {
		switch (request.command.head) {
			case "help":
				HelpCommand.execute(request.next());
				break;
			case "current":
				Current.execute(request.next());
				break;
			case "weekly":
				Weekly.execute(request.next());
				break;
			default:
				Invalid.execute(request.next());
		}
	}

}

module.exports = WeatherCommand;
