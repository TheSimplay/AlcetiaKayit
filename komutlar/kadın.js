const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {

    let kadınROL = ayarlar.kadınROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG

   if(!message.member.roles.has(yetkili)) return message.channel.send('<a:red:772069328899801088> Bu İşlemi Sadece Yetkililer Yapabilir! ')


if(!args[0]) return message.channel.send(`<a:gul:772159253842362408> Bir Kişiyi Etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, Kullanıcısını Sunucuda Bulamıyorum. <a:ates:772159160467849297> `)
if(kullanıcı.bot) return;
  

  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = '<a:red:772069328899801088> Şüpheli'
if (kurulus > 1296000000) kontrol = '<a:onay:772069318560579604> Güvenli'
  
  
let isim = args[1];
if(!isim) return message.channel.send(`<a:gul:772159253842362408> Kullanıcın İsmini Belirtmelisin.`)
if(isim.length > 16) return message.channel.send(`<a:red:772069328899801088> Daha Kısa Bir İsim Yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`<a:gul:772159253842362408> Kullanıcının Yaşını Belirtmelisin.`)
if(yaş.length > 100) return message.channel.send(`<a:red:772069328899801088> Kullanıcın Yaşı 100'den Büyük Olamaz.`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setColor(`#fffff0`)
.setColor(`#fffff0`)
.setFooter(`Kayıt Başarılı`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
message.guild.members.get(kullanıcı.id).setNickname(`${isim} ✯ ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(kadınROL)
  message.guild.members.get(kullanıcı.id).addRole(kayıtlıROL)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`<a:kalp_1:772089280536772618> **[»](https://discord.gg/dclink)** Kaydın Başarıyla **[ ${message.author} ](https://discord.gg/dclink)** Tarafından Yapıldı. \n <a:kalp_1:772089280536772618> **[»](https://discord.gg/dclink)** Sunucudaki İsmin : **[ ${isim} ](https://discord.gg/dclink)** **[ ${yaş} ](https://discord.gg/dclink)** \n <a:kalp_1:772089280536772618> **[»](https://discord.gg/dclink)** **<#id>** Kanalımızı Okumayı Unutma!`))
  db.add(`kız_${message.author.id}_${message.guild.id}`, "1")
let embed2 = new Discord.RichEmbed()
.setTitle(`<a:ates:772159160467849297>  Bir Kullanıcı Kayıt Oldu <a:ates:772159160467849297> `)
.setColor(`#fffff0`)
.setColor(`#fffff0`)
.setColor(`#fffff0`)
.setDescription(`
<a:kirmizi_yildiz:772069329993990154> **[»](https://discord.gg/dclink)** Kayıt Olan Kullanıcı : ${kullanıcı}   
<a:mavi_yildiz:772069347035185163> **[»](https://discord.gg/dclink)** İsim Yaş :  ${isim} ✯ ${yaş} 
<a:kirmizi_yildiz:772069329993990154> **[»](https://discord.gg/dclink)** Verilen Rol : <@&${kadınROL}>  
<a:mavi_yildiz:772069347035185163> **[»](https://discord.gg/dclink)** Bu Hesap :   ${kontrol}
<a:kirmizi_yildiz:772069329993990154> **[»](https://discord.gg/dclink)** Sunucumuz Şu An : **${message.guild.members.size} Kişi**
<a:mavi_yildiz:772069347035185163> **[»](https://discord.gg/dclink)** Kayıt eden : ${message.author} 
<a:kirmizi_yildiz:772069329993990154> **[»](https://discord.gg/dclink)** ${message.author} Toplam Kayıt Sayısı : **${toplam}** 

<a:gul:772159253842362408> Toplam Erkek Kaydı : **${erkek}** \n<a:gul:772159253842362408> Toplam Kız Kaydı : **${kız}**
`)
.setImage('https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif')


client.channels.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new Discord.RichEmbed()


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın'
}