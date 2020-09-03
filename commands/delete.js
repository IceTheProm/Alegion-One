/*
 * delete.js module
 *
 * This module contains stuff to purge and delete messages.
 */

const { MessageEmbed } = require('discord.js');

module.exports = async (client, message, args, author, authorIcon, clientName) => {
    // No permission
    if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        return message.channel.send(":x: No permission to delete messages!")

    if(!args[0]) 
        return message.channel.send("You can not delete no messages!")
    
    let deleteCount = parseInt(args[0], 10)
    
    if(deleteCount > 100 || deleteCount < 2) 
        return message.channel.send("The delete count has to between 2 and 100!")
    
    await message.channel.bulkDelete(deleteCount)
    
    // NOTE: You should do a function postEmbed() instead of always writing
    //       the same lines over and over.
    //
    //       It will allow you to easily do changes on the embed format whenever
    //       you have to!

    const deleteEmbed = new MessageEmbed()
        .setTitle("Deleted " + deleteCount + " messages!")
        .addField("Moderator", author)
        .setThumbnail(authorIcon)
        .addField("Messages Deleted", deleteCount)
        .setColor('RED')
        .setFooter(`2020 Copyright | ${clientName}`)
    
    message.channel.send(deleteEmbed).then(e => {
        e.delete({ timeout: 5000, reason: "I had to" })
    })
}
