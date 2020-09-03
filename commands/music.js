const { MessageEmbed } = require('discord.js')
const ytdl = require('ytdl-core')
const ytsr = require('ytsr')

module.exports = async (client, author, authorIcon, args, message) => {
    if (!message.member.voice.channel) return message.channel.send("Please join a voice channel!")

    const query = args.join(' ')
    if(!query) return message.channel.send(":x: Please provide a search term! :x:")
    const voiceChannel = await message.member.voice.channel.join()

    const res = await ytsr(query).catch(e => {
        return message.channel.send("No results found")
    })

    const video = res.items.filter(i => i.type === "video")[0]
    if(!video) return message.channel.send("No results found")

    const embed = new MessageEmbed()
    .setTitle("Now Playing: " + video.title)
    .setImage(video.thumbnail)
    .setDescription(video.link)
    .addField("Views", video.views.toLocaleString(), true)
    .addField("Duration", video.duration, true)
    .setColor('#000080')
    .setAuthor(video.author.name)

    message.channel.send(embed)

    const dispatch = voiceChannel.play(ytdl(video.link, {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }))
    .on('finish', function() {
        if(!message.member.voice.channel) return
        message.member.voice.channel.leave()
        return message.channel.send(":x: Song Ended")
    })
    .on('error', e => {
        return message.channel.send("There was an error while playing the requested song: " + e)
    })
}