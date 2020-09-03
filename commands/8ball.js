module.exports = async (client, message, args) => {
    if(!args[0]) return message.channel.send(':x: You must apply a question to ask the \'ol mighty 8 ball')

    let returnRandom = ['I can not predict now, try again later', 'No', 'Yes', 'Maybe', 'Your future is blurry', 'The answer my friend is swinging in the wind', 'You know the answer, look deep, find faith', 'This question is blurry beyond my sight', 'The mighty 8ball is sleeping']

    const random = returnRandom[Math.floor(Math.random() * returnRandom.length)]

    return message.channel.send(`:8ball: ${random}`)
    
}