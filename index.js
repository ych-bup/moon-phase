const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'm?';

const moon = require('celestial-moon');

client.on('ready', async () => {
    console.log('We logged in as ' + client.user.tag + '!');
    client.user.setActivity(`what is today's moon phase?`,{ type: "STREAMING" });
});

client.on('message', async message => {
    if(message.content == prefix + 'help'){
        const phase = moon.calculate(2020, 11, 10, 9, 30, 0, 0);
        message.channel.send(phase.name);
    }    
});

client.login(process.env.TOKEN);