module.exports = {
    name: 'unmute',
    description: "kişinin susturmasını kaldırır",
    execute(message, args) {
        
          const target = message.mentions.users.first();
          if(target){
             let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
             let muteRole = message.guild.roles.cache.find(role => role.name === 'Mutedx');
            
            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> mutesi kaldırıldı.`);
          }else {
              message.channel.send('Kişi bulunamadı');
          }

    }
}