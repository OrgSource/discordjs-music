const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const pingEmbed = new Discord.MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle(`Ping!`)
        .addField(`Bot Latency`, `\`Pinging...\``, true)
        .addField(`API Latency`, `\`${Math.round(interaction.client.ws.ping)}ms\``, true)
    const pingMessage = await interaction.editReply({embeds: [pingEmbed], fetchReply: true})
    var ping = pingMessage.createdTimestamp - interaction.createdTimestamp;

    const pongEmbed = new Discord.MessageEmbed()
		.setColor(interaction.client.config.defaults.colour)
        .setTitle(`Pong!`)
        .addField(`Bot Latency`, `\`${ping}ms\``, true)
        .addField(`API Latency`, `\`${Math.round(interaction.client.ws.ping)}ms\``, true)
        .setFooter({ text: interaction.client.config.defaults.embedFooter,  iconURL: interaction.client.user.displayAvatarURL()})
        .setTimestamp();
    return interaction.editReply({embeds: [pongEmbed] });
	}
};