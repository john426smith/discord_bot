const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
	console.log('I am ready!');
});

var prefix = '!'
client.on('message', message => {
	if (message.content.startsWith(prefix + 'ping')) {
		message.reply('pong');
	}

	if (message.content.startsWith(prefix + 'pong')) {
		message.reply('ping');
	}

	if (message.content.startsWith(prefix + 'marco')) {
		message.reply('polo');
	}
});

client.login(auth.token);