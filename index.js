const Discord = require('discord.js');
const client = new Discord.Client();
var moment = require('moment');

require('moment-timezone');

moment.tz.setDefault("Asia/Seoul");

const prefix = 'm?';

const moon = require('celestial-moon');

client.on('ready', async () => {
    console.log('We logged in as ' + client.user.tag + '!');
    client.user.setActivity(`what is today's moon phase?`,{ type: "STREAMING" });
});

client.on('message', async message => {
    if(message.content == prefix + 'help'){
        var date = moment().format('YYYY, MM, DD, HH, mm, ss')

        const phase = moon.calculate(date);
        message.channel.send(phase.name);
    }    
});

client.login(process.env.TOKEN);