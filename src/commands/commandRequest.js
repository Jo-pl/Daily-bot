const Database = include('database/Database');

/**
 * @typedef {Object} Discord.Message
 */

/**
 * @typedef {head : String | undefined, rest : String[]} Command
 */

/**
 * @typedef {object} User schema
 */

/**
 * @description This class shall contain 
 * all the required information
 * for the command , user and message.
 * @author SaschaAlex
 * @property {Command} command
 * @property {Discord.Message} message
 * @property {User} user
 */

class CommandRequest{
	/**
	 * 
	 * @param {{
	 *  	command : Command ,
	 *  	message : Discord.Message ,
	 *  	user : object
	 * }} arg the message is a discord Message and
	 * the user is defined in the database model
	 */
	constructor({
		command : command,
		message : message,
		user    : user
	}){
		this.command = command
		this.message = message
		this.user    = user
	}
	/**
	 * @description This function shall take 
	 * a discord message and shall create a request 
	 * object out of this.
	 * @async
	 * @author SaschaAlex
	 * @param {message} message discord message
	 * @return {CommandRequest}
	 */
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
	/**
	 * @description Shall Remove the head of the command
	 * and shall create a new request with the rest of 
	 * the command body
	 * @author SaschaAlex
	 * @return {CommandRequest}
	 */
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