const Embed = include('embed/index');

/**
 * @typedef {object} Request
 */

/**
 * @description Shall create an embed of the weekly 
 * weather according to the user setting
 * @author SaschaAlex
 */
class Weekly{
	/**
	 * @static
	 * @param {Request} request 
	 */
	static execute(request){
		request.embedParams = {
			type : Embed.EmbedType.Weather, 
			embedType : Embed.WeatherEmbedType.Weekly
		};
		//TODO

	}
}

module.exports = Weekly;