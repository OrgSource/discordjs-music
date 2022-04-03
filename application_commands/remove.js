const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('remove')
		.setDescription('Remove a song from the queue.')
        .addStringOption(option =>
            option
                .setName('number')
                .setDescription('The number of the song to remove.')
                .setRequired(true)
        ),
	async execute(interaction) {
        let guildQueue = client.player.getQueue(interaction.guild.id);
        let songnumber = interaction.options.getString('number')
        const pauseEmbed = new Discord.MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle('Removed Song')
        .addField(`Removed Song: `, `${queue.songs[songnumber-1].name}`, true)
        .addField(`Author: `, `${queue.songs[songnumber-1].author}`, true)
        .addField(`Duration: `, `${queue.songs[songnumberv].duration}`, true)
        .setImage(`${queue.songs[songnumber-1].thumbnail}`)
        interaction.editReply({embeds: [pauseEmbed]});
        guildQueue.remove(interaction.options.getString('number'));
    }
}