const { Player } = require("discord-music-player");

module.exports = async (client) => {
    client.player = new Player(client, {
        leaveOnEmpty: false, // This options are optional.
    });
}