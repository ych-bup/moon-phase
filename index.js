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
        var year = new Date().getFullYear()
        var month = new Date().getMonth()
        var date = new Date().getDate()
        var hour = new Date().getHours()
        var minute = new Date().getMinutes()
        var second = new Date().getSeconds()

        const phase = moon.calculate(year, month, date, hour, minute, second, 0);
        message.channel.send(phase.name);
    }    
});

client.login(process.env.TOKEN);