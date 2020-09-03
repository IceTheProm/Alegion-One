/*
 * UTILITIES
 *
 * Embed - Make the creation of embeds easier.
 */
const { MessageEmbed } = require('discord.js')

// String, String, List -> MessageEmbed
// Turns a list of strings into an embed.
/*
 * Example :
 *  generate_embed("My embed", "This is a line", [
 *      ["This is", "my embed"],
 *      ["Another", "line", true]
 *      ])
 *  
 *  will produce
 *
 *  new MessageEmbed()
 *      .setTitle("My embed")
 *      .setDescription("This is a line")
 *      .addField("This is", "my embed")
 *      .addField("Another", "line", true)
 *
 *  TODO: Add your own template with what else it needs.
 */
const generate_embed = function(title, desc, fields)
{
   var tmp = false; // This will be useful later
    var outEmbed = new MessageEmbed();

    // Sets up the title and the description.
    outEmbed.setTitle(title)
            .setDescription(desc)

    // Set up fields of each list items.
    fields.forEach(
        function(item, index)
        {
            tmp = false;
            if (item.length > 2)
                tmp = item[2];

            outEmbed.addField(item[0], item[1], tmp);
        }
    );

    // TODO: Add a footer.
    outEmbed.setColor('GREEN')
            .addField("Footer", "Footer");

    return outEmbed;
}

module.exports = {
    generate_embed: generate_embed
};
