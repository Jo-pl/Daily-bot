class HelpCommand {

    static execute() {
        return {
            embed: {
                color: '#0099ff',
                title: 'Help Weather Command',
                description: 'This is a help a command for weather'
            }
        }
    }
}

module.exports = {
    HelpCommand: HelpCommand
};