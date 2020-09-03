const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const inviteL = config.invite


/*
Alegion One
Multi-Bot
*/
client.login(token)

client.on('ready', ()=>{
    console.log('------------------------------------------------------------------------')
    console.log(`${client.user.username} is now online, with ${client.guilds.cache.size} servers!`)
    console.log("All Commands Loaded")
    console.log('------------------------------------------------------------------------')
    client.user.setActivity(`Warzone | ${client.guilds.cache.size} Servers | ;?`)
    client.user.setUsername('Alegion One')
})

client.on('guildCreate', guild=>{
    client.user.setActivity(`Warzone | ${client.guilds.cache.size} Servers | ;?`)
})

client.on('guildDelete', guild=>{
    client.user.setActivity(`Warzone | ${client.guilds.cache.size} Servers | ;?`)
})

// Register Commands
const ping = require('./commands/ping.js')
const help = require('./commands/help.js')
const bulkDelete = require('./commands/delete.js')
const kick = require('./commands/kick.js')
const ban = require('./commands/ban.js')
const music = require('./commands/music.js')
const invite = require('./commands/invite.js')
const minecraftServerPing = require('./commands/mc-server.js')
const report = require('./commands/report.js')
const meme = require('./commands/meme.js')
const mcList = require('./commands/mcserverlist.js')
const warnU = require('./commands/warn.js')
const randomBall = require('./commands/8ball.js')
const guessthenum = require('./commands/guessthenum')



client.on('message', message=>{
    // Create Commands
    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;


    if(!message.guild) return


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        let author = message.author.username
        let authorURL = message.author.avatarURL()
        let pings = Math.round(client.ws.ping)
        ping(client, message, pings, authorURL, author)
    } else if (command === "help" || command === "?") {
        help(client, args, message)
    } else if (command === "clear") {
        let author = message.author.username
        let authorURL = message.author.avatarURL()
        let clientName = client.user.username
        bulkDelete(client, message, args, author, authorURL, clientName)
    } else if (command === "kick") {
        let authorName = message.author.username
        let authorIcon = message.author.avatarURL()
        let user = message.mentions.members.first()
        let clientName = client.user.username
        kick(client, args, authorIcon, authorName, message, user, clientName)
    } else if (command === "ban") {
        let authorName = message.author.username
        let authorIcon = message.author.avatarURL()
        let user = message.mentions.members.first()
        let clientName = client.user.username
        ban(client, args, authorIcon, authorName, message, user, clientName)
    } else if (command === "play") {
        music(client, message.author.username, message.author.avatarURL(), args, message)
    } else if (command === "stop") {
        if(!message.member.voice.channel) return message.channel.send(":x: You must be in a voice channel to stop the music! :x:")
        message.member.voice.channel.leave()
        return message.channel.send("Music stopped! :musical_note:")
    } else if (command === "invite") {
        invite(client, message, inviteL)
    } else if (command === "ms" || command === "minecraft") {
        minecraftServerPing(client, message, args)
    } else if (command === "report") {
        // Rp
        report(client, message, args)
    } else if (command === "meme") {
        meme(client, message, args)
    } else if (command === "msl") {
        mcList(client, message)
    } else if (command === "warn") {
        let user = message.mentions.members.first()
        let authorN = message.author.username
        let authorI = message.author.avatarURL()
        warnU(client, message, args, user, authorN, authorI)
    } else if (command === "8ball") {
        randomBall(client, message, args)
    } else if (command === "randnum") {
       guessthenum(client, message, args)
    }


})

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */
 

 
client.on("message", function(message) {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === ";search") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
 
    }
 
});
 
function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        var pick = urls[Math.floor(Math.random() * urls.length)]
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send(pick);
    });
 
}
