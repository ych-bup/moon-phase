const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'm?';

client.on('ready', async () => {
    console.log('We logged in as ' + client.user.tag + '!');
    client.user.setActivity(`what is today's moon phase?`,{ type: "STREAMING" });
});

