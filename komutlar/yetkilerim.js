const Discord = require('discord.js');

module.exports.run = async (bot, message, args, member, client, level) => {
  const okey = bot.emojis.find(emoji => emoji.name === "kirmizi_tik");
    const juke = new Discord.RichEmbed()
  let user = message.mentions.members.first()

  if(!user) user = message.member
  
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (user.hasPermission("ADMINISTRATOR")) x = "<a:onay:772069318560579604>"
    if (!user.hasPermission("ADMINISTRATOR")) x = "<a:red:772069328899801088>"
    
    //Denetim kaydı
    if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<a:red:772069328899801088>"
    
    //Sunucuyu yönet
    if (user.hasPermission("MANAGE_GUILD")) x3 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_GUILD")) x3 = "<a:red:772069328899801088>"
    
    //Rolleri yönet
    if (user.hasPermission("MANAGE_ROLES")) x4 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_ROLES")) x4 = "<a:red:772069328899801088>"
    
    //Kanalları yönet
    if (user.hasPermission("MANAGE_CHANNELS")) x5 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "<a:red:772069328899801088>"
    
    //üyeleri at
    if (user.hasPermission("KICK_MEMBERS")) x6 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("KICK_MEMBERS")) x6 = "<a:red:772069328899801088>"
    
    //üyeleri yasakla
    if (user.hasPermission("BAN_MEMBERS")) x7 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("BAN_MEMBERS")) x7 = "<a:red:772069328899801088>"
    
    //mesajları yönet
    if (user.hasPermission("MANAGE_MESSAGES")) x8 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "<a:red:772069328899801088>"
    
    //kullanıcı adlarını yönet
    if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "<a:red:772069328899801088>"
    
    //emojileri yönet
    if (user.hasPermission("MANAGE_EMOJIS")) x10 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "<a:red:772069328899801088>"
  
  if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:onay:772069318560579604>"
    if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<a:red:772069328899801088>"
      let embed = new Discord.RichEmbed()

.setColor("0x36393E")
.setTitle(`<a:uzi:772069207188701214> ${user.user.tag}'ın Yetkileri:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
.addField('Başında <a:red:772069328899801088> olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında <a:onay:772069318560579604> olanlar o yetkiye sahip olunduğunu gösterir.', `<a:kalp_1:772089280536772618> Yetkilerine Gözüm Çarptı Ayol <a:kalp_1:772089280536772618> `)
     message.channel.sendEmbed(embed);
 

  
 
  message.react(okey)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkilerim','Yetkilerim','YETKİLERİM','yetkılerım'],
    permLevel: 0
};

exports.help = {
    name: 'yetkilerim',
      category: 'yetkilerim',
      description: 'Yetkilerini Gösterir.',
};