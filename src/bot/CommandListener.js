const {WeatherCommand} = require('../commands/weather/weatherCommand')
const CommandRequest   = require('../commands/commandRequest');

class CommandListener {
    constructor(message) {
        let request = CommandRequest.requestFromMessage(message);
        switch (request.command.head) {
            case "weather":
                new WeatherCommand(request.next());
                break;
            case "reddit":
                break;
        }
    }
}

module.exports = {
    CommandListener: CommandListener
};