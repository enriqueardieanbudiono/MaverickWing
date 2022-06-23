const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Help')
    .setAuthor({ name: 'Help', icon_url: 'https://imgur.com/uTTspNt', url: 'https://discord.gg/WkQjzDT' })
    .setDescription('This is a list of commands that I can perform.\n\n')
    .addFields(
        { name: 'ping', value: 'Replies with Pong!' },
        { name: '\u200b', value: '\u200b' },
        { name: 'help', value: 'Replies with this message' },
        { name: 'play', value: 'Plays a song' },
        { name: 'skip', value: 'Skips the current song' },
        { name: 'stop', value: 'Stops the current song' },
        { name: 'volume', value: 'Changes the volume of the current song' },
        { name: 'queue', value: 'Shows the current queue' },
        { name: 'pause', value: 'Pauses the current song' },
        { name: 'resume', value: 'Resumes the current song' },
        { name: 'getQueue', value: 'Gets the current queue' },
        { name: 'jump', value: 'Jumps to a specific song' },
        { name: 'removeQueue', value: 'Removes a song from the queue' },
        { name: 'repeat', value: 'Repeats the current song' },
        { name: 'user', value: 'Shows the user\'s information' },
        { name: 'server', value: 'Shows the server\'s information' }
    )
    .setTimestamp()
    .setFooter({ text: 'Made by: @ZRX#0001', icon_url: 'https://imgur.com/uTTspNt' })

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with a list of commands'),
    async execute(interaction) {
        const embed = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Help')
                    .setAuthor({ name: 'Help', icon_url: 'https://imgur.com/uTTspNt', url: 'https://discord.gg/WkQjzDT' })
                    .setDescription('This is a list of commands that I can perform.\n\n')
                    .addFields(
                        { name: 'ping', value: 'Replies with Pong!' },
                        { name: '\u200b', value: '\u200b' },
                        { name: 'help', value: 'Replies with this message' },
                        { name: 'play', value: 'Plays a song' },
                        { name: 'skip', value: 'Skips the current song' },
                        { name: 'stop', value: 'Stops the current song' },
                        { name: 'volume', value: 'Changes the volume of the current song' },
                        { name: 'queue', value: 'Shows the current queue' },
                        { name: 'pause', value: 'Pauses the current song' },
                        { name: 'resume', value: 'Resumes the current song' },
                        { name: 'getQueue', value: 'Gets the current queue' },
                        { name: 'jump', value: 'Jumps to a specific song' },
                        { name: 'removeQueue', value: 'Removes a song from the queue' },
                        { name: 'repeat', value: 'Repeats the current song' },
                        { name: 'user', value: 'Shows the user\'s information' },
                        { name: 'server', value: 'Shows the server\'s information' }
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Made by: @ZRX#0001', icon_url: 'https://imgur.com/uTTspNt' })
        await interaction.reply({ embeds: [embed] });
    }
}