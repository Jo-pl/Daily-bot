const {HelpCommand} = require('./helpCommand');

class WeatherCommand{
	constructor(subcommand , ...args){
		switch(subcommand){
			case "help":
				this.help();
				break;
			case "current":
				this.getWeather();
				break;
			default:
				this.invalidCommand();
		}                                                                   
	}
    
	execute(){
			
	}

	help(){
		console.log(HelpCommand.execute());
	}
	getWeather(){

	}
	invalidCommand(){
        
	}

}

module.exports = {WeatherCommand :WeatherCommand};