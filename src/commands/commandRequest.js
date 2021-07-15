const Database = include('database/Database');

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
		return Database.createUser(message)
		.then((user) => {
			return new CommandRequest({
					"command" : {
							"head" : head ,
							"rest" : rest 
					},
					"message" : message,
					"user"    : user,
			});
		})
		.catch((err) => {console.error(err) ; throw err});
}

	next(){
		let {rest : [head,...rest]} = this.command;
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