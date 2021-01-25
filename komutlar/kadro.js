const Discord = require('discord.js');

exports.run = async (client, message) => {
 
  var str = ''
for(var i = 0; i < message.guild.members.size; i++) {
   if(message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") && message.guild.members.array()[i].presence.status === "dnd" && !message.guild.members.array()[i].user.bot) {
      str += `${message.guild.members.array()[i].user.tag}\n`
    }
    else if(message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") && message.guild.members.array()[i].presence.status === "online" && !message.guild.members.array()[i].user.bot){
      str += `${message.guild.members.array()[i].user.tag}\n`
    }
    else if(message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") && message.guild.members.array()[i].presence.status === "idle" && !message.guild.members.array()[i].user.bot){
      str += `${message.guild.members.array()[i].user.tag}\n`
    }
      else if (message.guild.members.array()[i].hasPermission("MANAGE_MESSAGES") && message.guild.members.array()[i].presence.status === "offline" && !message.guild.members.array()[i].user.bot){
      str += `${message.guild.members.array()[i].user.tag}\n`
    }
}

  var embed = new Discord.RichEmbed()
  .setColor(0x36393E)
     .setAuthor(`Neddanis Family - Yetkili Kadrosu`, 'https://cdn.discordapp.com/emojis/699687584250593341.gif')
  .setDescription(str.replace(message.guild.owner.user.tag, ` **${message.guild.owner.user.tag}**`))
  .setThumbnail(message.guild.iconURL)
  .setFooter(`Bu Sunucu Neddanis BOT Tarafından 7/24 Koruma Altındadır!`, 'https://cdn.discordapp.com/emojis/760470077694410783.gif?v=1')
message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-listesi', 'sunucu-yetkilileri', 'moderatorler', 'modlar', 'kadro', 'staffs'],
  permLevel: 0
};

exports.help = {
  name: 'yetkililer',
  description: 'Bulunduğunuz sunucudaki yetkilileri çevrimiçi, çevrımdışı/görünmez, rahatsız etmeyin ve boşta modlarında olup olmadıklarını göstererek listeler. \n(Mesajları Yönet yetkisine sahip kullanıcıları yetkili olarak sayar.)',
  usage: 'yetkililer'
};