const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {

    console.log('I am ready!');

});

client.on('message', async message => {

    if (message.content === '/ping') {

        message.reply('Pong!');

    }

    if (message.content === '/help') {

        message.reply('You dont need help');

    }

});

client.login(config.token);