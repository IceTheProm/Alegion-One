module.exports = async (client, message, args, mcVar) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: No permissions to mute the chat!")

    if(!args[0]) return message.channel.send(":x: `mutechat <on / off>`")

    if (!args[0] === "on" || !args[1] === "off") return message.channel.send(":x: `mutechat <on / off>`")

    if(args[0] === "on") {
        mcVar = true
        return message.channel.send(':white_check_mark: Chat mute is now on!')
    } else if (args[0] === "off") {
        mcVar = false
        return message.channel.send(':white_check_mark: Chat mute is now off')
    }
}