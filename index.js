console.log("NodeJS Version: " + process.version);
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const express = require("express");
const app = express();
const path = require("path");
app.get("/", (req, res) => {
  res.send("W.I.P")
});
app.listen(3000)
client.on("ready", () => {
 client.user.setActivity("!blahaj", { type: "LISTENING" })
})
client.on("messageCreate", async message => {
   if (message.content.toLowerCase() === "!blahaj") {
     const blahajembed = new Discord.MessageEmbed()
     .setTitle("BLÅHAJ!💗")
     .setColor("PURPLE")
     .setDescription("I am blahaj! You can hug me (!hug), do the funni (!meme) more stuff will be added soon ecksdee")
     .setFooter("BLÅHAJ MY BELOVED💖!")
     .setImage("https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg")
     message.reply({embeds: [blahajembed]})
   };
  if (message.content.toLowerCase() === "!hug") {
    const hugembed = new Discord.MessageEmbed()
    .setTitle(`BLÅHAJ just hugged ${message.author.username}!`)
    .setColor("RANDOM")
    .setImage("https://preview.redd.it/33x8x9y80tn61.jpg?auto=webp&s=14c339ee5e63d3f869fe4b26d27ca58c476a90e1")
    message.reply({embeds: [hugembed]})
  };
  if (message.content.toLowerCase() === "!meme") {
    const memes = [
      "https://i.redd.it/l6itc9o7gii71.jpg", "https://cdn.dribbble.com/users/1951811/screenshots/15528937/blahaj_01_still_2x.gif?compress=1&resize=400x300", "https://64.media.tumblr.com/c69d466460d45ef0e888ede81e504429/9261f12d006dbacd-9e/s500x750/fe9c6b3030ace4c35c10a569305657af561d66ca.jpg",
      "https://c.tenor.com/NpyBsaAUbPoAAAAd/ikea-blahaj.gif",
      "https://c.tenor.com/JpairZOomiEAAAAd/bl%C3%A5haj-ikea-shark.gif",
      "https://c.tenor.com/5KOJLotjndsAAAAC/blahaj-ikea.gif",
      "https://c.tenor.com/H4TaQK5GMaUAAAAC/blahaj-i-love-blahaj.gif",
      "https://c.tenor.com/_Mhcjusg4nEAAAAS/blahaj-blahaj-lore.gif",
      "https://c.tenor.com/GAR9pKKpnIEAAAAS/shonk-shonks.gif",
      "https://c.tenor.com/72DFFz4CFXcAAAAS/haike-haike-hai.gif"
    ]
    const response = memes[Math.floor(Math.random() * memes.length)];
    message.reply(response)
  };
  
});
client.login(process.env.token);
