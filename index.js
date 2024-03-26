const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});










const keepAlive = require('./server.js');
keepAlive();



client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1219176873817276476')//
    .setType('WATCHING')//
    .setURL('https://discord.com/invite/tTAkssAh') //
    .setState('Ignore karoge')//
    .setName('To You')//
    .setDetails(`Join Humdard`)//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/emojis/1218865389308743680.png') // Large Image 
    .setAssetsLargeText('Kitna Imgnore Karte Ho') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/964306735500234823.gif') // Small image
    .setAssetsSmallText('Join Karo') //Text when you hover the Small image
    .addButton('Dm','https://discord.com/users/1023564857657794630')// button 1
.addButton('JOIN','https://discord.com/invite/tTAkssAh');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env.TOKEN;
client.login(mySecret);