/*
 * invite.js module
 *
 * Generates an invite to let others invite their friends!
 */
const { MessageEmbed } = require('discord.js')

module.exports = async (client, message, inviteLink) => {
    // TODO: (If you want to) use the generate_embed function.
    const inviteE = new MessageEmbed()
        .setTitle('Click me for invite link!')
        .setDescription('Click the title for the invite link!')
        .setURL(inviteLink)
        .setColor('GREEN')

    return message.channel.send(inviteE)
}
