const WeatherCommand = require('./weather/weatherCommand')
const CommandRequest   = require('./commandRequest');

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

module.exports = CommandListener;