// I will put the generate_embed example here.
// NOTE: generate_embed hasn't been tested.
// TODO: Test it.
const { generate_embed } = require("../utils/embed.js");

module.exports = async (client, args, message) => {
    const helpEmbed = generate_embed("Help", "[] means optional, <> means required.",
        [
            ["Prefix", ";"],
            [":gear: Useful Commands :gear:", "Commands than ban, clear, kick, and get info!"]
            ["Client's Ping", "ping", true]
            ["Bulk Delete", "clear <number>", true]
            ["Ban Member", "ban <member> <reason>", true]
            ["Kick Member", "kick <member> <reason>", true]
            ['Warn Member', 'warn <member> <reason>', true]
            [":partying_face: Fun Commands :partying_face:", "Commands that are fun!"]
            ['Laughing Your Meme\'s Out', 'meme', true]
            ['Let your path be chosen', '8ball <question>', true]
            ['What\'s your number?', 'randnum', true]
            ['Search for some images!', 'search <term>']
            [':musical_note: Music Commands :musical_note:', 'Music Commands!']
            ["Music Play", "play <search / URL>", true]
            ["Music Stop", "stop", true]
            [':blue_square: Minecraft Commands :blue_square:', 'Some blocky commands!']
            ["Minecraft Server", "ms <IP> [port]", true]
            ['Minecraft Server List', 'msl', true]
            ['Make sure to report any bugs you find', 'report <report>']
            ["Invite Me!", ";invite"]
            ['Join the support server!', 'https://discord.gg/cUYrWbX']
        ]);

    message.channel.send(helpEmbed)
}
