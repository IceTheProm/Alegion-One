/*
 * 8ball.js module
 *
 * This module contains the code of the
 * 8-ball command.
 */
module.exports = async (client, message, args) => {
    // No question, no answer
    if(!args[0]) 
        return message.channel.send(':x: You must apply a question to ask the \'ol mighty 8 ball')

    // A few strings so the 8ball can talk
    let returnRandom = [
        'I can not predict now, try again later', 
        'No', 
        'Yes', 
        'Maybe', 
        'Your future is blurry', 
        'The answer my friend is swinging in the wind', 
        'You know the answer, look deep, find faith', 
        'This question is blurry beyond my sight', 
        'The mighty 8ball is sleeping'
    ]

    const random = returnRandom[Math.floor(Math.random() * returnRandom.length)]

    return message.channel.send(`:8ball: ${random}`)
    
}
