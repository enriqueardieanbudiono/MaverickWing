const { SlashCommandBuilder } = require('@discordjs/builders');
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song in the voice channel')
        .addStringOption(string => 
            string
                .setName('song')
                .setDescription('Play a given song name / URL in the voice channel')
                .setRequired(true)),
    async execute(interaction) {

        /* This will get the song that has been provided */
        const song = interaction.options.getString('song');

        /* Gets thne voice channel where the member is in */
        const voiceChannel = interaction.member.voice.channel;
        if(!voiceChannel) return interaction.reply({ content: 'You are not in a voice channel.', ephemeral: true});

        music.play({
            interaction: interaction,
            voiceChannel: voiceChannel,
            song: song
        });
    },
};
