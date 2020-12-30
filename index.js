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
        let year = moment().format('YYYY');
        let month = moment().format('MM');
        let date = moment().format('DD');
        let hour = moment().format('HH');
        let minute = moment().format('mm');
        let second = moment().format('ss');

        const phase = moon.calculate(2020, 12, 30, 15, 30, 0, 0);
        message.channel.send(phase.name);
    }    
});

client.login(process.env.TOKEN);