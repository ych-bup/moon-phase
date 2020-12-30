const Discord = require('discord.js');
const client = new Discord.Client();
var moment = require('moment');

require('moment-timezone');

moment.tz.setDefault("Asia/Seoul");

const prefix = 'm?';

const moon = require('./celestial-moon');

client.on('ready', async () => {
    console.log('We logged in as ' + client.user.tag + '!');
    client.user.setActivity(`what is today's moon phase?`,{ type: "STREAMING" });
});

client.on('message', async message => {
    if(message.content == prefix + 'help'){
        var year = moment().format('YYYY');
        var month = moment().format('MM');
        var date = moment().format('DD');
        var hour = moment().format('HH');
        var minute = moment().format('mm');
        var second = moment().format('ss');

        const phase = moon.calculate(year, month, date, hour, minute, second, 0);
        message.channel.send(phase.name + year);
    }    
});

client.login(process.env.TOKEN);