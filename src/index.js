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