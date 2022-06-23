const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('volume')
        .setDescription('Change the volume of the music')
        .addIntegerOption(integer =>
            integer
                .setName('volume')
                .setDescription('The volume you want to set')
                .setRequired(true)),
    async execute(interaction) {

        const volume = interaction.options.getInteger('volume');

        /* If the volume is higher than 100, return. */
        if(volume > 100) return interaction.reply({ content: 'The volume cannot be higher than 100.', ephemeral: true });

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });

        music.setVolume({
            interaction: interaction,
            volume: volume
        });

        interaction.reply({ content: `The volume is now set to ${volume}%.`});
    },
};