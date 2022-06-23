const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('repeat')
        .setDescription('Repeats the current song')
        .addBooleanOption(boolean =>
            boolean
                .setName('onoroff')
                .setDescription('Turns the repeat on or off')
                .setRequired(true)),
    async execute(interaction) {
            
        /* This will get the song that has been provided */
        const boolean = interaction.options.getBoolean('onoroff');

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'I am not connected to a voice channel.', ephemeral: true });
        
        /* Checking if the music is already repeated. If it is, return. */
        const isRepeated = await music.isRepeated({
            interaction: interaction
        });
        if(isRepeated === boolean) return interaction.reply({ content: `The music is already on ${boolean}.`, ephemeral: true});

        music.repeat({
            interaction: interaction,
            value: boolean
        });

        interaction.reply({ content: `The music is now on ${boolean}.`});
    },
};