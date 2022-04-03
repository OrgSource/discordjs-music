const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('volume')
		.setDescription('Set the volume of the current song.')
	    .addNumberOption(option => 
            option
                .setName('volume')
                .setDescription('The volume that the bot will play at.')
        ),
	async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        let volume = interaction.options.getNumber('volume')
        if (volume == null) {
            const volumeEmbed = new Discord.MessageEmbed()
                .setColor(interaction.client.config.defaults.colour)
                .setTitle(`Volume is at ${interaction.client.player.options.volume}%`)
            return interaction.editReply({embeds: [volumeEmbed]});
        }
        if (volume > 100) {
            throw new Error('Volume cannot be over 100.')
        }
        guildQueue.setVolume(volume);
        const volumeEmbed = new Discord.MessageEmbed()
            .setColor(interaction.client.config.defaults.colour)
            .setTitle(`Volume has been set to ${volume}%`)
        interaction.editReply({embeds: [volumeEmbed]});
    }
}