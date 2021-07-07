const { Decimal128 } = require('mongodb');
const {Schema , model} = require('mongoose');

const DailyWeatherSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    temperature: Decimal128,
    feelsLike: Decimal128,
    tempMin: Decimal128,
    tempMax: Decimal128,
    pressure: Decimal128,
    humidity: Decimal128,
    date: Date,
});

const DailyWeather = model('DailyWeather', DailyWeatherSchema);

module.exports = DailyWeather;