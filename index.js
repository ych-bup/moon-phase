const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'm?';

const moon = require('celestial-moon');

client.on('ready', async () => {
    console.log('We logged in as ' + client.user.tag + '!');
    client.user.setActivity(`what is today's moon phase?`,{ type: "STREAMING" });
});

client.on('message', async message => {

    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    var date = new Date().getDate()
    var hour = new Date().getHours()
    var minute = new Date().getMinutes()
    var second = new Date().getSeconds()

    const phase = moon.calculate(year, month, date, hour, minute, second, 0);
    
    const fullMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **${phase.name}**.\n\`\`utc +0\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg')
        .setTimestamp()

    const channel = message.guild.channels.cache.find(ch => ch.name === 'moon-phase');
    if(!channel) return;

    setInterval(() => {
        if(new Date().getHours() == 12){
            if(phase.name == 'new-moon'){}
            if(phase.name == 'waxing-crescent'){}
            if(phase.name == 'first-quarter'){}
            if(phase.name == 'waxing-gibbous'){}
            if(phase.name == 'full-moon'){
                channel.send(fullMoon);
            }
            if(phase.name == 'waning-gibbous'){}
            if(phase.name == 'last-quarter'){}
            if(phase.name == 'waning-crescent'){}

        }
    }, 3600000);

});

client.login(process.env.TOKEN);