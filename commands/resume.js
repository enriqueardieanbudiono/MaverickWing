const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resume the current song'),
    async execute(interaction) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });

        /* CHecking the music is already resumed. If it is, return. */
        const isResumed = await music.isResumed({
            interaction: interaction
        });
        if(isResumed) return interaction.reply({ content: 'The music is already resumed.', ephemeral: true });

        music.resume({
            interaction: interaction
        });

        interaction.reply({ content: 'The music is now resumed.'});
    },
};