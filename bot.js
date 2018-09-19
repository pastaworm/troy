const Discord = require(‘discord.js’);
Const client = new Discord.Client();

client.on(‘ready’, () => 
	console.log(‘I am ready!’);
});

client.on(‘message’,  message => {
	if (message.content === ‘[ing’) {
	   message.reply(‘pong’);
	   }
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN;//where BOT_TOKEN is the token of our bot
