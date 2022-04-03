const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('resume the current song.'),
	async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        guildQueue.setPaused(false);
        const resumeEmbed = new Discord.MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle(':arrow_forward: Resumed')
        interaction.editReply({embeds: [resumeEmbed]});
    }
}