const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nowplaying')
		.setDescription('Get the current song playing.'),
	async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        const ProgressBar = guildQueue.createProgressBar();
        const nowPlayingEmbed = new Discord.MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle('Now Playing')
        .addField('Current Song: ', `${guildQueue.nowPlaying}`)
        .addField('Duration: ', `${ProgressBar.prettier}`)
        interaction.editReply({embeds: [nowPlayingEmbed]});
    }
}