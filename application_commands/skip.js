const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skip the current song.'),
	async execute(interaction) {
        let guildQueueData = interaction.client.player.getQueue(interaction.guild.id);
        const playingEmbed = new Discord.MessageEmbed()
                .setColor(interaction.client.config.defaults.colour)
                .setTitle('Skipped!')
                .addField('Song: ', `${guildQueueData.nowPlaying}`)
                interaction.editReply({embeds: [playingEmbed]});
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        guildQueue.skip();
    }
}