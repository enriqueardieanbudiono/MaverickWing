const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pauses the current song'),
    async execute(interaction) {
            
            /* Checking if the bot is connected. If it isn't, return. */
            const isConnected = await music.isConnected({
                interaction: interaction
            });
            if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true});

            /* Checking if the music is already paused. If it is, return. */
            const isPaused = await music.isPaused({
                interaction: interaction
            });
            if(isPaused) return interaction.reply({ content: 'The music is already paused.', ephemeral: true});

            /* Pausing the music */
            music.pause({
                interaction: interaction
            });

            interaction.reply({ content: 'Paused the music.'});
        },
};