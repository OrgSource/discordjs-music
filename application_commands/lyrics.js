const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.geniousAccessToken);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('lyrics')
		.setDescription('Get the lyrics of a song.'),
	async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        const searches = await Client.songs.search(guildQueue.songs[0].name);
        const firstSong = searches[0];
        const lyrics = await firstSong.lyrics();
        const nowPlayingEmbed = new Discord.MessageEmbed()
            .setColor(interaction.client.config.defaults.colour)
            .setTitle(`${guildQueue.songs[0].name} Lyrics`)
            .setFooter({ text: `${lyrics}`})
        interaction.editReply({embeds: [nowPlayingEmbed]});
    }
}
