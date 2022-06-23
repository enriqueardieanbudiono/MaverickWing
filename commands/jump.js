const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jump')
        .setDescription('Jump to a song in the queue.')
        .addIntegerOption(integer =>
            integer
                .setName('number')
                .setDescription('The number of the song you want to jump to.')
                .setRequired(true)),
    async execute(interaction) {
        /* Check if the number is provided */
        const number = interaction.options.getInteger('number');

        /* Checking if the bot is connected. If it isn't, return */
        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });

        /* Checking if the number is higher than the queue length */
        const queue = await music.getQueue({
            interaction: interaction
        });
        if(number > queue.length) return interaction.reply({ content: 'The number is higher than the queue length.', ephemeral: true });

        music.jump({
            interaction: interaction,
            number: number
        });

        interaction.reply({ content: `Jumped to the song ${number}.` });
    },
};