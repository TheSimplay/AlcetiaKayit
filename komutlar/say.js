const Discord = require('discord.js');
String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}
const dcs = function(sayı) {
  let codeshare = sayı.toString().replace('0', '0a')
    .replaceA('1', '1a')
    .replaceA('2', '2a')
    .replaceA('3', '3a')
    .replaceA('4', '4a')
    .replaceA('5', '5a')
    .replaceA('6', '6a')
    .replaceA('7', '7a')
    .replaceA('8', '8a')
    .replaceA('9', '9a')
  
  codeshare = codeshare
    .replaceA("0a", '<a:0_:772087410066587688>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("1a", '<a:1_:772087178108469248>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("2a", '<a:2_:772087307892949013>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("3a", '<a:3_:772086946947399701>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("4a", '<a:4_:772086857927622676>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("5a", '<a:5_:772087103848316978>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("6a", '<a:6_:772087366323011615>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("7a", '<a:7_:772087007782240286>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("8a", '<a:8_:772086689178058753>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
    .replaceA("9a", '<a:9_:772086568482766848>')//hareketli sayı emoji isim ve idleri şekildeki gibi yapın 
  
  return codeshare
}
exports.run = (client, message, args) => { 
 
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(` Bu Komutu Sadece **Yönetici Yetkisi** Kullanabilir`))

  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  let tag = message.guild.members.filter(r=>r.user.username.includes('✯')).size;
  let boost = message.guild.members.filter(r=>r.roles.has('BOOSTER İD ')).size
  let çevrimiçi = message.guild.members.filter(m => m.presence.status !== "offline").size
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

const embed = new Discord.RichEmbed()
.setColor('0x36393E')
   .setAuthor(`Neddanis BOT - Say`, 'https://cdn.discordapp.com/emojis/699687584250593341.gif')
.setDescription(`
<a:uzi:772069207188701214> **Toplam Üye**  ${dcs(message.guild.memberCount)} \n
<a:uzi:772069207188701214> **Aktif Üye**   ${dcs(çevrimiçi)} \n
<a:uzi:772069207188701214> **Taglı Üye**   ${dcs(tag)} \n
<a:uzi:772069207188701214> **Booster**     ${dcs(boost)} \n
<a:uzi:772069207188701214> **Sesteki Üye** ${dcs(count)} 
`)

message.channel.send(embed)
  message.react("772069345047609355");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: 'say',
  description: 'Sunucunuzdaki Toplam ÜYE vb Bilgileri Atar',
  usage: 'say'
}; 