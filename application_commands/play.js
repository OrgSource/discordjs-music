const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const { getTracks } = require('spotify-url-info')
const ytsearch = require('yt-search');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a song/playlist.')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('The song that the bot will play.')
                .setRequired(true)
        ),
	async execute(interaction) {
        let queue = interaction.client.player.createQueue(interaction.guild.id);
        let input = interaction.options.getString('input')
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        await queue.join(interaction.member.voice.channel);
        let song = await queue.play(input).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
        if (!song) {
            await queue.join(interaction.member.voice.channel);
            let playlist = await queue.playlist(input).catch(_ => {
                if(!guildQueue)
                    queue.stop();
            });
            console.log(playlist)
            const playEmbed = new MessageEmbed()
            .setColor(interaction.client.config.defaults.colour)
            .setTitle('Added Playlist')
            .addField(`Name: `, `${playlist.name}`, true)
            .addField(`Author: `, `${playlist.author}`, true)
            return interaction.editReply({embeds: [playEmbed]});
        }
        const playEmbed = new MessageEmbed()
        .setColor(interaction.client.config.defaults.colour)
        .setTitle('Added Song')
        .addField(`Added Song: `, `${song.name}`, true)
        .addField(`Author: `, `${song.author}`, true)
        .addField(`Duration: `, `${song.duration}`, true)
        .setImage(`${song.thumbnail}`)
        interaction.editReply({embeds: [playEmbed]});

    },
}