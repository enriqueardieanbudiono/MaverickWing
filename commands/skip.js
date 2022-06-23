const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skip the current song'),
    async execute(interaction) {
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });

        music.skip({
            interaction: interaction
        });

        interaction.reply({ content: 'The music is now skipped.'});
    },
};