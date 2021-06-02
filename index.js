// require the discord.js module
const Discord = require('discord.js');
// connect us to the config.json file
const config = require('./config.json');

// create a new Discord Client
const Client = new Discord.Client({disableEveryone: true});

// The message that we will get in terminal when we lunch the bot
Client.on("ready", async () => {
    console.log(`${Client.user.username} 온라인 입니다.`);

    // This Will be the Status Of our Bot
    Client.user.setActivity("영재 운동시킨다. (꼬익꼬익)", {type: "PLAYING"})
});

Client.on("message", async message => {
    if(message.author.CLient || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // IF Someone Send = hi the bot will respond by Hello
    if(cmd === `${prefix}운동`) {
        let number = Math.floor(Math.random() * 20);
        return message.channel.send(`세트에 ${number} 개`);
    }
    // If someone say = Youngjae the bot will mention / ping him then say "Young Jae 운동해"
    if(cmd === `${prefix}Youngjae`) {
        return message.reply("Young Jae 운동해");
    }
})

// Login To Discord with your app's Token
Client.login(config.token);