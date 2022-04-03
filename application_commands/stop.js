const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Leave the channel.'),
	async execute(interaction) {
        try {
            let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
            guildQueue.stop();
            const stopEmbed = new Discord.MessageEmbed()
            .setColor(interaction.client.config.defaults.colour)
            .setTitle('I Lefted the voice channel and cleared the queue.')
            interaction.editReply({embeds: [stopEmbed]});
        } catch (e) {
            interaction.editReply(`${e}`)
        }
    },
}