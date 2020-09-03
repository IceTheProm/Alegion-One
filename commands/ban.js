const { MessageEmbed } = require('discord.js')

module.exports = async (client, args, authorIcon, author, message, user, clientName) => {
    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":x: No permission! :x:")
    if (!user) return message.channel.send(":x: You have to mention a user to ban! :x:")
    const reason = args[1]
    if(!reason) return message.channel.send(":x: No reason provided! :x:")
    if(!user.bannable) return message.channel.send(":x: This user may not be banned! :x:")
    const ONONED = new MessageEmbed()
    .setTitle("You've Been Banned!")
    .addField("Moderator", author, true)
    .addField("Reason", reason, true)
    .setThumbnail(authorIcon)
    .setColor("RED")
    .setFooter("2020 Copyright | " + clientName)
    user.send(ONONED)
    await delay(2000)
    user.ban()
    const banEmbed = new MessageEmbed()
    .setTitle("Ban")
    .setDescription("You banned a user!")
    .setColor('RED')
    .addField("User banned", user)
    .addField("Moderator", author)
    .setAuthor(author, authorIcon)
    .setFooter(`2020 Copyright | ${clientName}`)

    return message.channel.send(banEmbed)
}