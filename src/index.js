//Discord dependancies
const Discord = require('discord.js');
//Basic functionnalities
const fs = require('fs');
const {
    URL
} = require("url");
const fetch = require("node-fetch");
//Cron jobs
//System vars and config file params
const dotenv = require("dotenv");
dotenv.config();
const config = require('../config.json');



//Initializing bot
const {
    Bot
} = require('./bot/Bot');
const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);
let discordBot = new Bot({
    client: client,
    config: config
});

//Weather method
async function fetchWeatherApi() {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", weather.location);
    url.searchParams.append("units", weather.unit);
    url.searchParams.append("lang", weather.lang);
    url.searchParams.append("appid", process.env.WEATHER_TOKEN);
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
//Weather embed
function embededWeather(body) {
    return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Curent weather")
        .setDescription(`The current weather for ${body.name} is ${body.weather[0].description} and it
        feels like ${body.main.feels_like} °C.`)
        .setThumbnail(`https://openweathermap.org/img/wn/${body.weather[0].icon}@4x.png`)
        .addField("Temperature for today", '\u200B')
        .addFields({
            name: 'Min',
            value: `${body.main.temp_min} °C`,
            inline: true
        }, {
            name: 'Current',
            value: `${body.main.temp} °C`,
            inline: true
        }, {
            name: 'Max',
            value: `${body.main.temp_max} °C`,
            inline: true
        }, )
        .addField('\u200B', '\u200B')
        .addFields({
            name: 'Wind Speed',
            value: `${body.wind.speed} m/s`,
            inline: true
        }, {
            name: 'Humidity',
            value: `${body.main.humidity} %`,
            inline: true
        }, {
            name: 'Pressure',
            value: `${body.main.pressure} hPa`,
            inline: true
        })
        .setTimestamp();
}