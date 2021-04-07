const { MessageFlags } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "kanala belirtilen sayı kadar mesaj siler",
    async execute(message, args) {
    
        if(!args[0]) return message.reply("Kaç tane sileceğimi belirtmelisin");
       if(isNaN(args [0])) return message.reply("Gerçek bir sayı yazman lazım.");
          
       if(args[0] > 100) return message.reply("hoop kardeşim yavaş o kadar mesajı silemem maksimum 100 silebilirim");
       if(args[0] < 1) return message.reply("en az 1 mesaj silmelisin");
 
       message.reply("Mesajlar silindi. Bu mesajı silebilirsin.")
       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
         message.channel.bulkDelete(messages)
       });
    }
}