const { MessageEmbed } = require('discord.js')

module.exports = async (client, message, ping, icon, author) => {
    let pingEmbed = new MessageEmbed()
    .setTitle("Client Ping")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Ping:', ping)
    .setFooter(`2020 Copyright | ${client.user.username}`)
    .setColor('GREEN')

    const m = await message.channel.send("Pinging Client...")
    m.edit(pingEmbed)
    return
}