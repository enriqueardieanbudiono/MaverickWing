 const { SlashCommandBuilder } = require('@discordjs/builders');

 module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with the user info'),
    async execute(interaction) {
        await interaction.reply(`User name: ${interaction.author.username}\nUser ID: ${interaction.author.id}`);
    },
 };