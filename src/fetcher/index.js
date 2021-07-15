const weatherFetcher = require('./weatherFetcher');
const redditFetcher  = require('./redditFetcher');

module.exports = {
	reddit : redditFetcher,
	weather : weatherFetcher
}