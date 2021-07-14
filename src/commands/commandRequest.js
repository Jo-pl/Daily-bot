const Database = require('../database/Database');

class CommandRequest{
	
	constructor({
		command : command,
		message : message,
		user    : user,
	}){
		this.command = command
		this.message = message
		this.user    = user
	}

	static requestFromMessage(message){
		let [_, ...command] = message.content;
		let [head , ...rest] = command.join('').split(" ");
		Database.createUser(message).then((user) => {
			new CommandRequest({
					"command" : {
							"head" : head ,
							"rest" : rest 
					},
					"message" : message,
					"user"    : user,
			});
			console.log(result);
		})
		.catch((err) => {console.error(err) ; throw err});
}

	next(){
		[_,head,...rest] = this.command;
		return new CommandRequest({
			command : {
				"head" : head,
				"rest" : rest
			},
			message : this.message,
			user    : this.user
		});
	}

}

module.exports = CommandRequest;