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
        .setDescription(`Today's moon phase is **NEW MOON**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Moon.jpg') // finish
        .setTimestamp()
    
    const waxingCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING CRESCENT**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://i1.wp.com/awesomesasquatch.com/wp-content/uploads/2014/06/waxing-crescent_9786.jpg?resize=1600%2C1600') // finish
        .setTimestamp()
    
    const firstQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FIRST QUARTER**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334676428877/the-phases-of-the-moon/first-quarter/first%20quarter.jpg') // finish
        .setTimestamp()
    
    const waxingGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING GIBBOUS**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://3.bp.blogspot.com/-0rmUmbNUJ2Q/VdGLlWPAMqI/AAAAAAAAKVU/r9gCl2SOfFU/s1600/moon_4_14_00.jpg') // finish
        .setTimestamp()
    
    const fullMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FULL MOON**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg') // finish
        .setTimestamp()
    
    const waningGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING GIBBOUS**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://www.enchantedlearning.com/shimmerings/images/Moon-phase718waning-20170911-0736utc-A73E0551-M.png') // finish
        .setTimestamp()
        
    const lastQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **LAST QUARTER**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/last-quarter-moon.jpg?itok=yMQmAF5f') // finish 
        .setTimestamp()
    
    const waningCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING CRESCENT**.\n\n\`\`utc +0\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334592105347/the-phases-of-the-moon/waning-crescent/waning%20crescent.jpg?height=272&width=274') // finish
        .setTimestamp()
    
    const channel = message.guild.channels.cache.find(ch => ch.name === 'moon-phase');
    if(!channel) return;

    if(message.content.startsWith(prefix + 'phase')){
        if(phase.name == 'new-moon'){
            message.channel.send(newMoon);
        }
        if(phase.name == 'waxing-crescent'){
            message.channel.send(waxingCrescent);
        }
        if(phase.name == 'first-quarter'){
            message.channel.send(firstQuarter);
        }
        if(phase.name == 'waxing-gibbous'){
            message.channel.send(waxingGibbous);
        }
        if(phase.name == 'full-moon'){
            message.channel.send(fullMoon);
        }
        if(phase.name == 'waning-gibbous'){
            message.channel.send(waningGibbous);
        }
        if(phase.name == 'last-quarter'){
            message.channel.send(lastQuarter);
        }
        if(phase.name == 'waning-crescent'){
            message.channel.send(waxingCrescent);
        }
    }
});

client.login(process.env.TOKEN);