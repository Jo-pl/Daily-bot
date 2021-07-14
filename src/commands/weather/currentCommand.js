const {Weather} = require("../../weather/weather");

class Current {

    static execute({message : message}) {
        let weather = new Weather(message);
        
        weather.fetchWeatherApi("weather")
            .then((body) => {
                message.channel.send(weather.embededCurrent(body));
            })
            .catch((err) => {
                console.log(err);
                message.channel.send("Error to process your request");
            }
        );
    }

}
module.exports = {
    Current: Current
};