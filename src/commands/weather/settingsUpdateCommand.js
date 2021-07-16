const Embed = include('embed/index');
const Discord = require('discord.js');

class SettingsUpdateComand {

    static execute(request) {
        request.embedParams = {
            type : Embed.EmbedType.Weather, 
            embedType : Embed.WeatherEmbedType.Settings
        };
        Embed.EmbedBuilder.build(request).then(async (embed) => {
            let message = await request.message.channel.send(embed);
            message.react('✅');
            message.react('❌');
            message.awaitReactions((reaction,user)=>{return ['✅', '❌'].includes(reaction.emoji.name) && request.message.author.id === user.id},
            { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === '✅') {
                    let embed = new Discord.MessageEmbed()
                    .setTitle('Setting update')
                    .setDescription('`Your settings have been saved`')
                    .setTimestamp();
                    message.edit(embed);
                    this.deleteMessage(message,request.message);
                } else {
                    let embed = new Discord.MessageEmbed()
                    .setTitle('Setting update')
                    .setDescription('`Changes canceled...`')
                    .setTimestamp();
                    message.edit(embed);
                    this.deleteMessage(message,request.message);
                }
            }).catch(collected => {
                let embed = new Discord.MessageEmbed()
                .setTitle('Setting update')
                .setDescription('`Request expired`')
                .setTimestamp();
                message.edit(embed);
                this.deleteMessage(message,request.message);
            });
        });

    }

    static deleteMessage(message,originalMessage){
        new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve();
            },3000);
        }).then(() =>{message.delete();originalMessage.delete();});
    }
}

module.exports = SettingsUpdateComand;