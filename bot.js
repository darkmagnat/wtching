const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type:'WATCHING',
     url: 'WATCHING',
    name: '-Universe Town` 1K-Soon........ ',
    application_id: '501452003143319553',//هنا ايدي البوت 
     assets: {
         large_image:   `509420418453471236`, //هنا id صوره يلي جبت
  
    }
  }
    });
  
});


client.login(process.env.BOT_TOKEN);
