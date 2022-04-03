const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pause the current song.'),
	async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        guildQueue.setPaused(true);
        const pauseEmbed = new Discord.MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle(':play_pause: Paused')
        interaction.editReply({embeds: [pauseEmbed]});
    }
}