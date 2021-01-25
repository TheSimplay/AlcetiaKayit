const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');
 
module.exports.run = async (bot, message, args, member, client, level) => {
  const okey = bot.emojis.find(emoji => emoji.name === "kirmizi_tik");
    const juke = new Discord.RichEmbed() 
    var konum = 'Konumlar'
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Orta Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
   
  var tarih = 'Tarihler'
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
       if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }    const sunucubilgi = new Discord.RichEmbed()
 .setAuthor(`Neddanis BOT - Sunucu Bilgi`, 'https://cdn.discordapp.com/emojis/699687584250593341.gif')
  .setColor("0x36393E")
  .addField(`<a:gul:772159253842362408> Kullanıcılar [${message.guild.memberCount}]`, `<a:uzi:772069207188701214> ${message.guild.members.filter(m => m.user.presence.status === "online").size} Çevrimiçi \n <a:uzi:772069207188701214> ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta \n <a:uzi:772069207188701214> ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin \n <a:uzi:772069207188701214> ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrim Dışı \n <a:uzi:772069207188701214> ${message.guild.members.filter(m => m.user.bot).size} Bot`, true)
  .addField(`<a:ates:772159160467849297> Kanallar`, `<a:100_bit:772069288592670770> Toplam Kanal Sayısı : ${message.guild.channels.size} \n <a:100_bit:772069288592670770> Toplam Yazı Kanalı : ${message.guild.channels.filter(c => c.type === "text").size} \n <a:100_bit:772069288592670770> Toplam Ses Kanalı : ${message.guild.channels.filter(c => c.type === "voice").size}`, true)
  .addField(`<a:tac:772158972340731925> Sunucu Kurucusu <a:tac:772158972340731925>`, `<a:tac:772158972340731925> ${message.guild.owner} <a:tac:772158972340731925>`, true)
  .addField(`<a:mavi_yildiz:772069347035185163> Rol Sayısı`, `<a:kirmizi_yildiz:772069329993990154> ${message.guild.roles.size}`, true)
  .addField(`<a:sarab:772159013584371712> Doğrulama Seviyesi`, `<a:testere_donen:772069210318307328> ${message.guild.verificationLevel}`, true ) 
 
  .addField(`<a:yanip_sonen_1:772069185910997034> Sunucu Bölgesi`, konum , true)
  .addField(`<a:yanip_sonen_1:772069185910997034> Oluşturulma Tarihi`, tarih, true)
  .addField(`<a:yanip_sonen_1:772069185910997034> Sunucu ID`, message.guild.id,true)
 
  
  .setFooter(`Bu Sunucu Neddanis BOT Tarafından 7/24 Koruma Altındadır!`, 'https://cdn.discordapp.com/emojis/760470077694410783.gif?v=1')
 
return message.channel.sendEmbed(sunucubilgi);

  
  message.react(okey)

    message.channel.send(juke).catch()
 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu bilgi','sb','sunucu-bilgi','SB','SunucuBilgi','sunucu-info','Sİ','si','SI','sı'],
    permLevel: 0
};

exports.help = {
    name: 'sunucubilgi',
      category: 'sunucubilgi',
      description: 'Sunucu Bilgisini Gösterir.',
};