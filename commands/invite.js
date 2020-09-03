const { MessageEmbed } = require('discord.js')

// Invite The Bot

module.exports = async (client, message, inviteLink) => {
    const inviteE = new MessageEmbed()
    .setTitle('Click me for invite link!')
    .setDescription('Click the title for the invite link!')
    .setURL(inviteLink)
    .setColor('GREEN')
    return message.channel.send(inviteE)
}