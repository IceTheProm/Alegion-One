module.exports = async (client, message, args) => {
    const report = args[0]
    if (!report) return message.channel.send(':x: Need to apply a bug report!')
    console.log('New bug reported:      ' + message.content)
    return message.channel.send(':white_check_mark: Done!')
}