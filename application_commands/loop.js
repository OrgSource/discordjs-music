
const { SlashCommandBuilder } = require('@discordjs/builders');
const { RepeatMode } = require('discord-music-player');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loop')
		.setDescription('Loop the current song/queue/off.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('off')
                .setDescription('Turn off looping.')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('song')
                .setDescription('Loop the current song.')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('queue')
                .setDescription('Loop the current queue.')
        ),
	async execute(interaction) {
        try {
            let args = interaction.options.getSubcommand()
            let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
            if (!guildQueue) {
                throw new Error('No queue found.');
            }
            if (args == "off") {
                guildQueue.setRepeatMode(RepeatMode.DISABLED);
                const loopEmbed = new Discord.MessageEmbed()
                    .setColor(interaction.client.config.defaults.colour)
                    .setTitle('Loop mode set to off')
                interaction.editReply({embeds: [loopEmbed]});
            } else if (args == "song") {
                guildQueue.setRepeatMode(RepeatMode.SONG);
                const loopEmbed = new Discord.MessageEmbed()
                    .setColor(interaction.client.config.defaults.colour)
                    .setTitle('Loop mode set to current song')
                interaction.editReply({embeds: [loopEmbed]});
            } else if (args == "queue") {
                guildQueue.setRepeatMode(RepeatMode.QUEUE);
                const loopEmbed = new Discord.MessageEmbed()
                    .setColor(interaction.client.config.defaults.colour)
                    .setTitle('Loop mode set to queue')
                interaction.editReply({embeds: [loopEmbed]});
            }
        } catch (e) {
            interaction.editReply(`${e}`)
        }
    }
}
