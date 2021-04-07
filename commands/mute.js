module.exports = {
    name: 'mute',
    description: "kişiyi susturur",
    execute(message, args) {
        
          const target = message.mentions.users.first();
          if(target){
             let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
             let muteRole = message.guild.roles.cache.find(role => role.name === 'Mutedx');
            
            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> mutelendi.`);
          }else {
              message.channel.send('Kişi bulunamadı');
          }

    }
}