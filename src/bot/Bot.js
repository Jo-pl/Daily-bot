const schedule = require("node-schedule");
const {
    CommandListener
} = require('./CommandListener');
const Connection = require('./Connection');
const model = require('../../Model/index');

/**
 * @description This class 
 * is responsible for the handling of all requests
 * from the users.
 */
class Bot {
    /**
     * @author Misterjo, SaschaAlex
     * @param {Object} parameters  
     */
    constructor(parameters) {
        this.client = parameters.client
        this.config = parameters.config
        this.connection = new Connection();
        this.listenClient();
    }
    /**
     * @listener
     * @author Misterjo, SaschaAlex 
     */
    listenClient() {
        console.log("testing");
        const channel = this.client.channels.cache.get('855918559992348723');
        this.client.once('ready', () => {
            console.log('Ready!');
        });
        //Message listener
        this.client.on('message', message => {
            let [prefix, ...command] = message.content;
            if (prefix == this.config.prefix) { 
                UserCreation(message);
                let paramTuple = [
                    message,
                    command.join('').split(" ")
                ]
                let commandListener = new CommandListener(paramTuple);
            }
        })
    }

}

function UserCreation(message){
    
}

module.exports = {
    Bot: Bot
};