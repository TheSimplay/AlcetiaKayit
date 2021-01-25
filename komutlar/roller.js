const Discord = require('discord.js')
module.exports.run = async (bot, message, args, member, client, level) => {
    try {
         const okey = bot.emojis.find(emoji => emoji.name === "kirmizi_tik");
    const juke = new Discord.RichEmbed()  
            .addField(`<a:kalp_1:772089280536772618> **Sunucuda**, **bulunmakta olan roller**; <a:kalp_1:772089280536772618>`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join('  \n '))
            .setColor(0x36393E)
          
    message.channel.send(juke).catch()
    
    } catch (err) {
      const juke = new Discord.RichEmbed()  
            .addField(`<a:kalp_1:772089280536772618> **Sunucuda,** **bulunmakta olan roller**; <a:kalp_1:772089280536772618>`, 'Çok fazla rol bulunmakta veya rol bulunmamakta!')
            .setColor(0x36393E)
 
    message.channel.send(juke).catch()
  
  

    }
},

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['roles'],
    permLevel: 0,
    kategori: 'genel'
}

exports.help = {
    name: 'roller',
    description: 'Sunucuda bulunan rolleri gösterir.',
    usage: 'roller'
}