/*
    Command: Warn
    Type: Discord.js
    Catorgory: Moderation
*/

// Messages JSON
const PM = require('./warn.json')

// Messages
const PermMN = PM.NoPermM
const warnThumbn = PM.WarnTURL

// MessageEmbed Require
const { MessageEmbed } = require('discord.js');



// The Actual Command
module.exports = async (client, message, args, user, author, authorIcon) => {
    if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(PermMN)
    if(!user) return message.channel.send(':x: You need to apply a user to warn! :x:')
    const warnReason = args[1]
    if(!warnReason) return message.channel.send(':x: No reason provided :x:')
    const warnAEmbed = new MessageEmbed()
        .setTitle('You warned someone!')
        .setColor('GREEN')
        .setThumbnail(authorIcon)
        .setAuthor(author, authorIcon)
        .addField('User Warned', user, true)
        .addField('Reason', warnReason, true) 
        .setFooter('2020 Copyright | Alegion One')
    
    message.channel.send(warnAEmbed)


    const warnMEmbed = new MessageEmbed()
        .setTitle('You have got a warning!')
        .setColor('RED')
        .setDescription(`You got an warning from **${author}**`)
        .setThumbnail('https://www.keysigns.co.uk/images/hazard-warning-safety-signs-p1254-38488_zoom.jpg')
        .addField('Reason', warnReason)
        .setFooter('2020 Copyright | Alegion One')
        .setAuthor(author, authorIcon)

    user.user.send(warnMEmbed)
}