const randomPuppy = require('random-puppy')
const Discord = require('discord.js')

module.exports = async (client, message, args) => {
    const subReddits = ["dankmeme", 'memes', 'dankmeme', 'dankmeme', 'meme']
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(memeEmbed);
}