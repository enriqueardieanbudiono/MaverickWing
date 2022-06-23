const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removequeue')
        .setDescription('Remove a song from the queue')
        .addIntegerOption(integer =>
            integer
                .setName('number')
                .setDescription('The number of the song you want to remove')
                .setRequired(true)),
    async execute(interaction) {

        /* Get the number that has been provided */
        const number = interaction.options.getInteger('number');

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true});

        /* Get the queue to check if the number exists */
        const queue = await music.getQueue({
            interaction: interaction
        });
        if(!queue[number - 1]) return interaction.reply({ content: 'The number provided is not in the queue.', ephemeral: true});

        music.removeQueue({
            interaction: interaction,
            number: number
        });
        interaction.reply({ content: `Removed the song #${number} from the queue.`});
    },
};