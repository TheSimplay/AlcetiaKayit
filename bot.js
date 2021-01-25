const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
const db = require('quick.db')
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
let prefix = ayarlar.prefix

const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////////// DURUM //////////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(ayarlar.token);


client.on("ready", () => {
  client.user.setPresence({
    game: { name: `Neddanis Family 😍`, type: "WATCHING" },
    status: "dnd"
  });
});

////////////////////////////// DURUM //////////////////////////////

////////////////////////////// EDİTLE //////////////////////////////


////////////////////////////// GİRİŞ SON //////////////////////////////
  client.on("guildMemberAdd", member => { 
    const moment = require('moment');
  const kanal = ayarlar.giriskanal;
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const tarih = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
  let rol = ayarlar.kayıtsızROL
 member.addRole(rol)

  var kontrol;
if (tarih < 1296000000) kontrol = ' **Şüpheli** <a:red:772069328899801088>'
if (tarih > 1296000000) kontrol = ' **Güvenli** <a:onay:772069318560579604>'

  moment.locale("tr");
  var gifler = [
  `https://data.whicdn.com/images/329944728/original.gif`,
  `https://i.pinimg.com/originals/52/e3/6e/52e36e1ae7ae5e3dc922bd9b6fe99a20.gif`,
  `https://3.bp.blogspot.com/-82ar8lnEqaU/VMvRZUXlf4I/AAAAAAAC36U/QomzOqgmiac/s1600/capfling.gif`,
  `https://pa1.narvii.com/7379/aead813e3826ca0627f1e2092ce6d002ca85096fr1-480-200_hq.gif`,
  `https://i.pinimg.com/originals/2f/c3/14/2fc3144963793534480ecd54e0548307.gif`
  ]
    var gif = gifler[Math.floor(Math.random() * (gifler.length))]
    let kanal1 = client.channels.get(kanal);
    let giris = new Discord.RichEmbed()
   .setColor('0x36393E')
    .setTitle(`<a:kalp_1:772089280536772618> Sunucuya Yeni Bir **Kullanıcı** Katıldı! <a:kalp_1:772089280536772618>`)
    .setDescription(`
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** Hoşgeldin **[ ${member} ](https://discord.gg/dclink)** \n<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** **[Teyit](https://discord.gg/dclink)** Odasına Geçerek **[Kayıt](https://discord.gg/dclink)** Olabilirsin! \n
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** Hesabın Oluşturulma **[Tarihi](https://discord.gg/dclink)**; \n<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** \ ${moment(member.user.createdAt).format("YYYY DD MMMM dddd (hh:mm:ss)")} \n 
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** Seninle Birlikte **[ ${member.guild.memberCount} ](https://discord.gg/dclink)** Kişiyiz! \n
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** Tagımızı Alarak **[Ekibimize](https://discord.gg/dclink)** Katılabilirsin! **[ ${ayarlar.tag} ](https://discord.gg/dclink)** \n
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)**  **[ <@&${ayarlar.yetkiliROL}> ](https://discord.gg/dclink)** Rolüne Sahip **[Yetkililer](https://discord.gg/dclink)** Sizinle İlgilenecektir!
<a:hey:772069244190851122> **[»](https://discord.gg/dclink)** Hesap: **${kontrol}**
`)
    .setImage(`${gif}`)
    
kanal1.send(giris)
  });

////////////////////////////// GİRİŞ SON //////////////////////////////