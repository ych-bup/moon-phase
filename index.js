const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'm?';

const moon = require('celestial-moon');
const weather = require('weather-js');
const moment = require('moment');

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
    var fullDate = moment().format('YYYY-MM-DD HH:mm:ss')

    const phase = moon.calculate(year, month, date, hour, minute, second, 0);
    
    const newMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **NEW MOON**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Moon.jpg') // finish
        .setTimestamp()
    
    const waxingCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING CRESCENT**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://i1.wp.com/awesomesasquatch.com/wp-content/uploads/2014/06/waxing-crescent_9786.jpg?resize=1600%2C1600') // finish
        .setTimestamp()
    
    const firstQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FIRST QUARTER**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334676428877/the-phases-of-the-moon/first-quarter/first%20quarter.jpg') // finish
        .setTimestamp()
    
    const waxingGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WAXING GIBBOUS**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://3.bp.blogspot.com/-0rmUmbNUJ2Q/VdGLlWPAMqI/AAAAAAAAKVU/r9gCl2SOfFU/s1600/moon_4_14_00.jpg') // finish
        .setTimestamp()
    

    const fullMoon = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **FULL MOON**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg') // finish
        .setTimestamp()
    
    const waningGibbous = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING GIBBOUS**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://www.enchantedlearning.com/shimmerings/images/Moon-phase718waning-20170911-0736utc-A73E0551-M.png') // finish
        .setTimestamp()
        
    const lastQuarter = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **LAST QUARTER**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/last-quarter-moon.jpg?itok=yMQmAF5f') // finish 
        .setTimestamp()
    
    const waningCrescent = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('***TODAY\'s MOON PHASE!!***')
        .setDescription(`Today's moon phase is **WANING CRESCENT**.\n\n\`\`${fullDate} (utc +0)\`\``)
        .setThumbnail('https://sites.google.com/site/moonfactssciencelesson/_/rsrc/1334592105347/the-phases-of-the-moon/waning-crescent/waning%20crescent.jpg?height=272&width=274') // finish
        .setTimestamp()
    
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

client.on('message', async(message) => {
    if(message.content == prefix + "weather"){
        const city = message.content.split(" ").slice(1);
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest();
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ab284d4e6164ffed82a5af8bd073fed4", true);
        xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
            var obj = JSON.parse(xmlhttp.responseText);
            message.channel.send(obj.main.temp-273);
            message.channel.send(obj.clouds.all + "%");
        }
    };
    xmlhttp.send();
    }
})

client.login(process.env.TOKEN);