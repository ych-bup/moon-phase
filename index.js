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
    
    const newMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **NEW MOON**.\n\`\`utc +0\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Moon.jpg') // finish
        .setTimestamp()
    
    const waxingCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING CRESCENT**.\n\`\`utc +0\`\``)
        .setThumbnail('https://i1.wp.com/awesomesasquatch.com/wp-content/uploads/2014/06/waxing-crescent_9786.jpg?resize=1600%2C1600') // finish
        .setTimestamp()
    
    const firstQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FIRST QUARTER**.\n\`\`utc +0\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334676428877/the-phases-of-the-moon/first-quarter/first%20quarter.jpg') // finish
        .setTimestamp()
    
    const waxingGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING GIBBOUS**.\n\`\`utc +0\`\``)
        .setThumbnail('https://3.bp.blogspot.com/-0rmUmbNUJ2Q/VdGLlWPAMqI/AAAAAAAAKVU/r9gCl2SOfFU/s1600/moon_4_14_00.jpg') // finish
        .setTimestamp()
    
    const fullMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FULL MOON**.\n\`\`utc +0\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg') // finish
        .setTimestamp()
    
    const waningGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING GIBBOUS**.\n\`\`utc +0\`\``)
        .setThumbnail('https://www.enchantedlearning.com/shimmerings/images/Moon-phase718waning-20170911-0736utc-A73E0551-M.png') // finish
        .setTimestamp()
        
    const lastQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **LAST QUARTER**.\n\`\`utc +0\`\``)
        .setThumbnail('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/last-quarter-moon.jpg?itok=yMQmAF5f') // finish 
        .setTimestamp()
    
    const waningCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING CRESCENT**.\n\`\`utc +0\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334592105347/the-phases-of-the-moon/waning-crescent/waning%20crescent.jpg?height=272&width=274') // finish
        .setTimestamp()
    
    const channel = message.guild.channels.cache.find(ch => ch.name === 'moon-phase');
    if(!channel) return;

    setInterval(() => {
        if(new Date().getMinutes() == 19){
            if(phase.name == 'new-moon'){
                channel.send(newMoon);
            }
            if(phase.name == 'waxing-crescent'){
                channel.send(waxingCrescent);
            }
            if(phase.name == 'first-quarter'){
                channel.send(firstQuarter);
            }
            if(phase.name == 'waxing-gibbous'){
                channel.send(waxingGibbous);
            }
            if(phase.name == 'full-moon'){
                channel.send(fullMoon);
            }
            if(phase.name == 'waning-gibbous'){
                channel.send(waningGibbous);
            }
            if(phase.name == 'last-quarter'){
                channel.send(lastQuarter);
            }
            if(phase.name == 'waning-crescent'){
                channel.send(waxingCrescent);
            }

        }
    }, 30000);

});

client.login(process.env.TOKEN);