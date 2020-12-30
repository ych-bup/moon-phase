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

        const phase = moon.calculate(2020, 12, 30, 9, 30, 0);
        message.channel.send(phase.name + " " + date);
    }    
});

client.login(process.env.TOKEN);