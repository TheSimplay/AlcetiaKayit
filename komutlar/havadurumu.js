const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:uzi:772069207188701214> Lütfen Bir Yer Gir.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x36393E)
          .addField('<a:kirmizi_yildiz:772069329993990154> Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('<a:mavi_yildiz:772069347035185163> Derece Türü',location.degreetype, true)
          .addField('<a:kirmizi_yildiz:772069329993990154> Sıcaklık',`${current.temperature} Derece`, true)
          .addField('<a:mavi_yildiz:772069347035185163> Hava', `${current.feelslike}`, true)
          .addField('<a:kirmizi_yildiz:772069329993990154> Rüzgar',current.winddisplay, true)
          .addField('<a:mavi_yildiz:772069347035185163> Nem', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hd', 'hava-durumu'],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};