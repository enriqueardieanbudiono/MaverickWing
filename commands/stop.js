const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the music of the bot and disconnects'),
    async execute(interaction) {
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });

        /* Checking if there is music playing. If there isn't, return. */
        const queue = music.queue({
            interaction: interaction
        });
        if(queue.length === 0) return interaction.reply({ content: 'There is no music playing.', ephemeral: true });

        music.stop({
            interaction: interaction
        });
    },
};