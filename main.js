// Made by veinz707
// https://github.com/veinzchill



const Discord = require("discord.js");


const client = new Discord.Client();

const prefix = "*";

const fs = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
       console.log('Nynx Aktif!');
});
     
    client.on('message', message => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
    
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
    
      if(command === 'clear') {
        client.commands.get('clear').execute(message, args);
      } else if(command === 'yetki') {
        client.commands.get('yetki').execute(message, args);
      } else if(command === 'sa') {
        client.commands.get('sa').execute(message, args);
      } else if(command === 'mute') {
        client.commands.get('mute').execute(message, args);
      } else if(command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
      }
    });
      
client.login('XXXXXXXXXXXXXXXXXX');
