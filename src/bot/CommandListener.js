const {WeatherCommand} = require('../commands/weather/weatherCommand')
const CommandRequest   = require('../commands/commandRequest');

class CommandListener {
    constructor(message) {
        CommandRequest.requestFromMessage(message)
        .then((request) => {
            switch (request.command.head) {
                case "weather":
                    new WeatherCommand(request.next());
                    break;
                case "reddit":
                    break;
            }
        })
        .catch((err) => console.log(err));
    }
}

module.exports = {
    CommandListener: CommandListener
};