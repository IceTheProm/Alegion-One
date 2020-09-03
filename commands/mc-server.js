const ping = require('minecraft-server-util')
const { MessageEmbed } = require('discord.js')

module.exports = async (client, message, args) => {
    let ip = args[0]
    if (!ip) return message.channel.send(":x: You need to supply a IP to get!")
    let port = args[1]
    if(port) {
        ping(ip, parseInt(port), (error, reponse) =>{
            if(error) return message.channel.send("There was an error getting this server: " + error)
            const Embed2 = new MessageEmbed()
            .setTitle('Server Status')
            .addField('Server IP', reponse.host)
            .addField('Server Version', reponse.version)
            .addField('Online Players', reponse.onlinePlayers)
            .addField('Max Players', reponse.maxPlayers)
            .setColor('GREEN')

            return message.channel.send(Embed2)
    })
}
    if (!port) {
    message.channel.send("No port supplied, using defualt...")
    port = 25565
    ping(ip, parseInt(port), (error, reponse) =>{
        if(error) return message.channel.send("There was an error getting this server: " + error)
        const Embed = new MessageEmbed()
        .setTitle('Server Status')
        .addField('Server IP', reponse.host)
        .addField('Server Version', reponse.version)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Max Players', reponse.maxPlayers)
        .setColor('GREEN')
        
        return message.channel.send(Embed)
    }
)
}
}