module.exports = {
    name: 'yetki',
    description: "yönetici yetkisi var mı diye kontrol eder",
    execute(message, args) {
 
         if(message.member.permissions.has("ADMINISTRATOR"))
         {
             message.channel.send('Yönetici yetkin bulundu..');           
         }else {
             message.channel.send('Yönetici yetkisi bulunamadı..')
         }
      
        }
    }
