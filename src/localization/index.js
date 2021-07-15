const local_weather = require('./local_weather/index');
const local_reddit  = require('./local_reddit/index');

module.exports = {
	weather : local_weather,
	reddit  : local_reddit
}