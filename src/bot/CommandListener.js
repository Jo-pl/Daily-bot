const {
    WeatherCommand
} = require('../commands/weather/weatherCommand')

class CommandListener {
    constructor([message, [command, ...args]]) {

        switch (command) {
            case "weather":
                let weatherCommand = new WeatherCommand([message, args]);
                break;
            case "reddit":
                break;
        }
    }
}

module.exports = {
    CommandListener: CommandListener
};