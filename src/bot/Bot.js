const schedule = require("node-schedule");
const {CommandListener} = require('./CommandListener');

const Connection = require('../database/Connection');


const Database = require('../database/Database');
const CommandRequest = require('../commands/commandRequest');

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
                /** 
                Database.createUser(message).then((user) => {
                    console.log(user);
                });
                */
                CommandRequest.requestFromMessage(message);

                //new CommandListener(message);
            }
        })
    }

}

function UserCreation(message){
    
}

module.exports = {
    Bot: Bot
};