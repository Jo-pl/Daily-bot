const WeatherCommand = require('./weather/weatherCommand')
const CommandRequest   = require('./commandRequest');

/**
 * @typedef {object} Message
 */

/**
 * @description
 * Shall spawn the command according to the request head
 * @author Misterjo
 */
class CommandListener {
    /**
     * 
     * @param {Message} message 
     */
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