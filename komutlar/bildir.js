const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('<a:gul:772159253842362408> Doğru Kullanımı: **[n!bildir](https://discord.gg/dclink)**'));
const embed = new Discord.RichEmbed()
.setColor(0x36393E)
.setDescription('<a:uzi:772069207188701214> Bize **Şikayetinizi** veya **İstediğinizi** Belirttiğiniz İçin **Teşekkür** Ederiz!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor(0x36393E)
.setDescription(`**${message.author.tag}** Adlı Kullanıcının Bildirimi:`)
.addField(` <a:100_bit:772069288592670770> Kulanıcı Bilgileri`, ` <a:dc_1:772069323292409866> Kullanıcı ID: ${message.author.id}\n <a:dc_1:772069323292409866> Kullanıcı Adı: ${message.author.username}\n <a:dc_1:772069323292409866> Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("<a:100_bit:772069288592670770> İleti; ", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('772564457821831178').send(embed2); 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['tavsiye'],
  permLevel: 0 
};

exports.help = {
  name: 'bildir',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'bildir <tavsiyeniz>'
};