/*
 * ban.js module
 *
 * This script contains utilities allowing moderators to ban people who are
 * doing naughty stuff.
 */
const { MessageEmbed } = require('discord.js')

// Can you even read it yourself? No offence btw
module.exports = async (client, args, authorIcon, author, message, user, clientName) => {
    
    // Animation!
    const delay = (msec) => 
        new Promise((resolve) =>
            setTimeout(resolve, msec));
    
    // If the member can't ban, yeetus fetus deletus
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        return message.channel.send(":x: No permission! :x:")
    // No user, no ban
    if (!user) 
        return message.channel.send(":x: You have to mention a user to ban! :x:")
    
    // The reason should be optional...
    // You should be able to ban without reason too
    var reason = args[1]
    // Instead, just give a blank string.
    if(!reason) 
        reason = "";
    // If the user is immune, refuse ban
    if(!user.bannable) 
        return message.channel.send(":x: This user may not be banned! :x:")

    // NOTE: Indent your code like this for a better readibility.
    const ONONED = new MessageEmbed()
        .setTitle("You've Been Banned!")
        .addField("Moderator", author, true)
        .addField("Reason", reason, true)
        .setThumbnail(authorIcon)
        .setColor("RED")
        .setFooter("2020 Copyright | " + clientName)

    user.user.send(ONONED)
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
    // NOTE: I appreciate what you did for the copyright, author, etc.
    //       not everyone would do that!

    return message.channel.send(banEmbed)
}
