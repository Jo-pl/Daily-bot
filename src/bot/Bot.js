const schedule = require("node-schedule");

class Bot {
    constructor(parameters) {
        this.client = parameters.client
				this.config = parameters.config
        this.listenClient();
        //console.log(this.client);
    }
    listenClient() {
        console.log("testing");
        const channel = this.client.channels.cache.get('855918559992348723');
        this.client.once('ready', () => {
            console.log('Ready!');
            schedule.scheduleJob(`${this.config.weather.time.minute} ${this.config.weather.time.hour} *  *  *`, () => {});
        });
        //Message listener
        this.client.on('message', message => {
            if (message.content.startsWith(this.config.prefix)) {
                console.log(message.author.avatarURL({
                    format: 'jpeg',
                    dynamic: true,
                    size: 2048
                }));
            }
        })
    }
}
module.exports = {
    Bot: Bot
};
