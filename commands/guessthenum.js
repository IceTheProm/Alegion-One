module.exports = async (client, theMessage, args) => {
    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

    let guessNum = Math.round(Math.random() * 100)
    const message = await theMessage.channel.send('Getting the random number...')
    await delay(500)
    message.edit(':red_circle: :blue_circle: :green_circle:')
    await delay(500)
    message.edit(':yellow_circle: :red_circle: :blue_circle:')
    await delay(500)
    message.edit(':orange_circle: :yellow_circle: :red_circle:')
    await delay(1000)
    message.edit('The number is... **' + guessNum + "**")

}