const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
var gifler = [
  `https://data.whicdn.com/images/329944728/original.gif`,
  `https://i.pinimg.com/originals/52/e3/6e/52e36e1ae7ae5e3dc922bd9b6fe99a20.gif`,
  `https://3.bp.blogspot.com/-82ar8lnEqaU/VMvRZUXlf4I/AAAAAAAC36U/QomzOqgmiac/s1600/capfling.gif`,
  `https://pa1.narvii.com/7379/aead813e3826ca0627f1e2092ce6d002ca85096fr1-480-200_hq.gif`,
  `https://i.pinimg.com/originals/2f/c3/14/2fc3144963793534480ecd54e0548307.gif`
  ]
module.exports.run = async (bot, message, args, member, client, level) => {
    var gif = gifler[Math.floor(Math.random() * (gifler.length))]
  const okey = bot.emojis.find(emoji => emoji.name === "kirmizi_tik");
    const juke = new Discord.RichEmbed()
    .setColor('0x36393E')
        .setAuthor(`Neddanis BOT - Kayıt Menüsü`, 'https://cdn.discordapp.com/emojis/699687584250593341.gif')
      .setDescription('***<a:dc_1:772069323292409866> [»](https://discord.gg/dclink) Herhangi Bir Şikayet ve Öneride [n!bildir](https://discord.gg/dclink) Komutu İle Bildirin! \n<a:dc_1:772069323292409866> [»](https://discord.gg/dclink) Bu Bot [Neddanis Family](https://discord.gg/dclink) Sunucusuna Özel Olarak Yapılmıştır!  \n<a:dc_1:772069323292409866> [»](https://discord.gg/dclink) Neddanisin [Özel Komutlarını](https://discord.gg/dclink) Kullanarak Keyifli Vakit Geçir! ***')

.addField('**Kayıt Komutlar Menüsü;**', ':white_small_square: **n!erkek** : Belirttiğiniz Kişiyi Erkek Rolüyle Kayıt Eder. \n:white_small_square: **n!kız** : Belirttiğiniz Kişiyi Erkek Rolüyle Kayıt Eder. \n:white_small_square: **n!isim** : Belirttiğiniz Kişinin İsmini Düzenlersiniz. \n:white_small_square: **n!toplamkayıt** : Sunucuda Olan Tüm Kayıtları Gösterir.')
       
 .setImage(`${gif}`)
    .setFooter(`Bu Sunucu Neddanis BOT Tarafından 7/24 Koruma Altındadır!`, 'https://cdn.discordapp.com/emojis/760470077694410783.gif?v=1')
	
  
    message.channel.send(juke).catch()
  message.react(okey)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayit','Kayit','Kayıt','KAYIT','KAYİT'],
    permLevel: 0
};

exports.help = {
    name: 'kayıt', 
      category: 'kayıt',
      description: 'kayıt Menüyü Gösterir.',
};