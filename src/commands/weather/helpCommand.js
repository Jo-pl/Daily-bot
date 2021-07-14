

class HelpCommand {

    static execute(request) {
        request.message.channel.send({
            embed: {
                color: 'RANDOM',
                title: 'Help Weather Command',
                description: 'This is a help a command for weather',
                fields : [
                    {
                        name : "Help",
                        value : "`$weather help` This is a help command for the weather command.",
                        inline : false
                    },
                    {
                        name : "Current",
                        value : "`$weather current` This command will get the current weather.",
                        inline : false
                    },
                    {
                        name : "Day",
                        value : "`$weather day` The forecast for today hourly",
                        inline : false
                    },
                    {
                        name : "Week",
                        value : "`$weather week` The forecast for the next 7 days.",
                        inline : false
                    },
                    {
                        name : "Unit",
                        value : "`$weather unit {unit}` Command to change unit.",
                        inline : false
                    },
                    {
                        name : "Lang",
                        value : "`$weather unit {lang}` Command to change language.",
                        inline : false
                    },
                    {
                        name : "Loc",
                        value : "`$weather loc {loc}` Command to change location.",
                        inline : false
                    }
                ]
            }
        }
    );
    }
}

module.exports = {
    HelpCommand: HelpCommand
};