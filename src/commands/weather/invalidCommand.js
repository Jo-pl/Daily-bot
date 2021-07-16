const Embed = include('embed/index');
const HelpCommand = require('./helpCommand');

/**
 * @typedef {object} Request
 */

class InvalidCommand {
  /**
   * @author SaschaAlex
   * @param {Request} request
   * @static 
   */
  static execute(request) {
    request.embedParams = {
        type : Embed.EmbedType.Weather, 
        embedType : Embed.WeatherEmbedType.Invalid
    };
    async function run(){
      let embed = await Embed.EmbedBuilder.build(request);
      let message = await request.message.channel.send(embed);
      await message.react('❔');
      message.awaitReactions((reaction, user) => {
        return (user.id == request.message.author.id) && (reaction.emoji.name == '❔')},
        {max : 1 ,time :20000}
      )
      .then((collection) => {
        if(collection.size != 0){
          message.delete();
          HelpCommand.execute(request);
        }else{
          throw "Out of time"
        }
      })
      .catch(() => {});
    };
    run();

  }
}

module.exports = InvalidCommand;